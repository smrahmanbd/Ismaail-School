// Shared chemistry helpers for the Grade 10 "Mole" animations.
const NA = 6.02e23;
// Atomic masses as rounded in most Grade 10 textbooks.
const ELEMENTS = {
  H:{n:'Hydrogen',m:1.008}, He:{n:'Helium',m:4.003}, C:{n:'Carbon',m:12.01}, N:{n:'Nitrogen',m:14.01},
  O:{n:'Oxygen',m:16.00}, F:{n:'Fluorine',m:19.00}, Ne:{n:'Neon',m:20.18}, Na:{n:'Sodium',m:22.99},
  Mg:{n:'Magnesium',m:24.31}, Al:{n:'Aluminium',m:26.98}, Si:{n:'Silicon',m:28.09}, P:{n:'Phosphorus',m:30.97},
  S:{n:'Sulfur',m:32.07}, Cl:{n:'Chlorine',m:35.45}, Ar:{n:'Argon',m:39.95}, K:{n:'Potassium',m:39.10},
  Ca:{n:'Calcium',m:40.08}, Cr:{n:'Chromium',m:52.00}, Mn:{n:'Manganese',m:54.94}, Fe:{n:'Iron',m:55.85},
  Co:{n:'Cobalt',m:58.93}, Ni:{n:'Nickel',m:58.69}, Cu:{n:'Copper',m:63.55}, Zn:{n:'Zinc',m:65.38},
  Br:{n:'Bromine',m:79.90}, Kr:{n:'Krypton',m:83.80}, Sr:{n:'Strontium',m:87.62}, Ag:{n:'Silver',m:107.87},
  I:{n:'Iodine',m:126.90}, Ba:{n:'Barium',m:137.33}, Au:{n:'Gold',m:196.97}, Pb:{n:'Lead',m:207.2}
};
const COLORS = {navy:'#0b3954',teal:'#04505a',green:'#2f5a1c',rust:'#8f3520',amber:'#7a4412',violet:'#3f3266',plum:'#5a2f38',grey:'#4a4a5a'};
const ELCOLOR = {H:'#7fa6c9',C:'#4a4a5a',O:'#b5442c',N:'#3f5fa8',Cl:'#3d7a2a',S:'#b08a1e',K:'#6b4fa0',Ca:'#7a6a55',Na:'#6b4fa0',Fe:'#8a5a2b',Cu:'#b06a3b',Cr:'#4f7f7a',Mg:'#5f8f3f',Br:'#8a3f2f',Al:'#8a8a99',Ba:'#7a6a20',Co:'#3f5fa8',Zn:'#6d7a88',Sr:'#7a5a6a',Ag:'#8f97a3'};

// ---------- formatting ----------
function sig(x, n=3){ if(x===0) return '0'; const p=Math.floor(Math.log10(Math.abs(x))); const d=Math.max(0,n-1-p); return x.toFixed(Math.min(d,10)); }
function sci(x, n=3, html=true){
  if(!isFinite(x)) return '—';
  if(x===0) return '0';
  const e=Math.floor(Math.log10(Math.abs(x)));
  if(e>=-3 && e<5) return sig(x,n);
  let m=x/Math.pow(10,e); let ms=m.toFixed(n-1);
  if(parseFloat(ms)>=10){ ms=(m/10).toFixed(n-1); return html?`${ms} × 10<sup>${e+1}</sup>`:`${ms}e${e+1}`; }
  return html?`${ms} × 10<sup>${e}</sup>`:`${ms}e${e}`;
}
function sub(formula){ // H2O -> H<sub>2</sub>O ; keeps · and leading coefficients normal
  return formula.replace(/([A-Za-z\)\]])(\d+)/g,'$1<sub>$2</sub>');
}

// ---------- formula parser (handles brackets and hydrates like CuSO4·5H2O) ----------
function normalizeFormula(s){
  const subs='₀₁₂₃₄₅₆₇₈₉';
  return s.replace(/[₀-₉]/g,c=>subs.indexOf(c)).replace(/[\.\*•∙⋅]/g,'·').replace(/\s+/g,'');
}
function parseFormula(raw){
  const s=normalizeFormula(raw);
  const total={};
  for(const part of s.split('·')){
    if(!part) continue;
    const m=part.match(/^(\d+)(.*)$/);
    const k=m?parseInt(m[1]):1; const body=m?m[2]:part;
    const c=parseGroup(body);
    for(const el in c) total[el]=(total[el]||0)+c[el]*k;
  }
  if(Object.keys(total).length===0) throw new Error('empty formula');
  return total;
}
function parseGroup(s){
  let i=0;
  function num(){ let st=i; while(i<s.length && /\d/.test(s[i])) i++; return st===i?1:parseInt(s.slice(st,i)); }
  function group(){
    const out={};
    while(i<s.length){
      const ch=s[i];
      if(ch==='('||ch==='['){ i++; const g=group(); if(s[i]!==')'&&s[i]!==']') throw new Error('missing )'); i++; const k=num(); for(const e in g) out[e]=(out[e]||0)+g[e]*k; }
      else if(ch===')'||ch===']'){ return out; }
      else if(/[A-Z]/.test(ch)){ let sym=ch; i++; if(i<s.length && /[a-z]/.test(s[i])){ sym+=s[i]; i++; }
        if(!ELEMENTS[sym]) throw new Error('unknown element '+sym); const k=num(); out[sym]=(out[sym]||0)+k; }
      else throw new Error('unexpected "'+ch+'"');
    }
    return out;
  }
  const r=group(); if(i!==s.length) throw new Error('unbalanced brackets'); return r;
}
function molarMass(counts){ let t=0; for(const e in counts) t+=counts[e]*ELEMENTS[e].m; return t; }
function gcd(a,b){ return b?gcd(b,a%b):a; }

// ---------- small helpers ----------
const $=(q,el=document)=>el.querySelector(q);
const $$=(q,el=document)=>[...el.querySelectorAll(q)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const reduceMotion=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function tween(ms, fn){ return new Promise(res=>{ if(reduceMotion){fn(1);res();return;} const t0=performance.now(); function f(t){ let p=Math.min(1,(t-t0)/ms); const e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2; fn(e); if(p<1) requestAnimationFrame(f); else res(); } requestAnimationFrame(f); }); }
function svgEl(tag, attrs={}, parent){ const e=document.createElementNS('http://www.w3.org/2000/svg',tag); for(const k in attrs) e.setAttribute(k,attrs[k]); if(parent) parent.appendChild(e); return e; }
function elementOptions(select, selected){ select.innerHTML=Object.keys(ELEMENTS).map(s=>`<option value="${s}" ${s===selected?'selected':''}>${s} — ${ELEMENTS[s].n} (${ELEMENTS[s].m})</option>`).join(''); }
