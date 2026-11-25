// Quiz bank for "The Mole". t: mc = multiple choice, num = number answer, f = formula answer.
// Every number was checked with the atomic masses in common.js.
const QUIZZES = [
{id:'L1', title:'Quiz 1 · Measuring Matter', color:'#0b3954', qs:[
 {t:'mc', q:'One mole of any substance contains…', o:['12 particles','6.02 × 10²³ particles','6.02 × 10²³ grams','a different number of particles for each substance'], a:1, e:'A mole is a counting unit: always 6.02 × 10²³ particles (Avogadro\'s number), whatever the substance. Option c mixes up a count with a mass.'},
 {t:'mc', q:'What is the representative particle of carbon dioxide, CO₂?', o:['atom','molecule','formula unit','ion'], a:1, e:'CO₂ is a covalent compound, so its particles are molecules.'},
 {t:'mc', q:'What is the representative particle of potassium bromide, KBr?', o:['atom','molecule','formula unit','gram'], a:2, e:'KBr is ionic (a metal + a non-metal), so we count formula units.'},
 {t:'num', q:'How many atoms are in 2.50 mol of iron?', a:1.505e24, u:'atoms', e:'Moles → particles: multiply. 2.50 × 6.02 × 10²³ = 15.05 × 10²³ = <b>1.51 × 10²⁴ atoms</b>.'},
 {t:'num', q:'How many moles are 3.01 × 10²³ molecules of water?', a:0.5, u:'mol', e:'Particles → moles: divide. 3.01 × 10²³ ÷ 6.02 × 10²³ = <b>0.500 mol</b>.'},
 {t:'num', q:'Convert 1.20 × 10²⁴ atoms of helium to moles.', a:1.993, u:'mol', e:'1.20 × 10²⁴ ÷ 6.02 × 10²³: fronts 1.20 ÷ 6.02 = 0.1993; powers 24 − 23 = 1 → 0.1993 × 10 = <b>1.99 mol</b>.'},
 {t:'mc', q:'You have a number of atoms and want moles. Which factor do you multiply by?', o:['6.02 × 10²³ atoms / 1 mol','1 mol / 6.02 × 10²³ atoms','molar mass / 1 mol','1 mol / molar mass'], a:1, e:'The unit you HAVE (atoms) must be on the bottom so it cancels.'},
 {t:'mc', q:'Which sample contains the MOST particles?', o:['0.50 mol of Cu','2.0 × 10²³ atoms of Ag','1.0 mol of H₂O','5.0 × 10²² molecules of O₂'], a:2, e:'Convert all to particles: 0.50 mol = 3.01 × 10²³; 1.0 mol = 6.02 × 10²³ (largest); the others are 2.0 × 10²³ and 5.0 × 10²².'}
]},
{id:'L2', title:'Quiz 2 · Mass and the Mole', color:'#2f5a1c', qs:[
 {t:'mc', q:'What is the molar mass of sodium (Na)?', o:['11 g/mol','22.99 g/mol','6.02 × 10²³ g/mol','22.99 amu/mol'], a:1, e:'Molar mass = the periodic-table number in grams per mole: 22.99 g/mol. (11 is sodium\'s atomic number, not its mass.)'},
 {t:'num', q:'What is the mass of 2.00 mol of magnesium (Mg = 24.31)?', a:48.62, u:'g', e:'Moles → grams: 2.00 mol × 24.31 g/mol = <b>48.6 g</b>.'},
 {t:'num', q:'How many moles are in 100.0 g of calcium (Ca = 40.08)?', a:2.495, u:'mol', e:'Grams → moles: 100.0 ÷ 40.08 = <b>2.50 mol</b>.'},
 {t:'num', q:'How many atoms are in 5.00 g of carbon (C = 12.01)?', a:2.506e23, u:'atoms', e:'Two steps: 5.00 ÷ 12.01 = 0.4163 mol; 0.4163 × 6.02 × 10²³ = <b>2.51 × 10²³ atoms</b>.'},
 {t:'num', q:'What is the mass of 3.01 × 10²³ atoms of iron (Fe = 55.85)?', a:27.925, u:'g', e:'Atoms → moles: 3.01 × 10²³ ÷ 6.02 × 10²³ = 0.500 mol. Moles → grams: 0.500 × 55.85 = <b>27.9 g</b>.'},
 {t:'mc', q:'Dividing the molar mass of an element by Avogadro\'s number gives…', o:['the number of moles','the mass of one atom','the number of atoms','the atomic number'], a:1, e:'(g/mol) ÷ (atoms/mol) = g/atom: the mass of a single atom.'},
 {t:'mc', q:'Which sample has the greatest mass?', o:['1 mol of Al','1 mol of S','2 mol of He','0.5 mol of Cu'], a:1, e:'Al = 26.98 g; S = 32.07 g (largest); 2 mol He = 8.01 g; 0.5 mol Cu = 31.78 g. Close call between S and Cu!'},
 {t:'mc', q:'Why can\'t you convert grams directly into atoms in one step?', o:['Grams and atoms are the same thing','You must go through moles: molar mass links g ↔ mol, and Avogadro\'s number links mol ↔ atoms','Atoms have no mass','You need the atomic number'], a:1, e:'MASS ⇄ MOLES ⇄ PARTICLES: moles are always the bridge.'}
]},
{id:'L3', title:'Quiz 3 · Moles of Compounds', color:'#8f3520', qs:[
 {t:'num', q:'Calculate the molar mass of CO₂.', a:44.01, u:'g/mol', e:'12.01 + 2(16.00) = 12.01 + 32.00 = <b>44.01 g/mol</b>.'},
 {t:'num', q:'Calculate the molar mass of Na₂SO₄.', a:142.05, u:'g/mol', e:'2(22.99) + 32.07 + 4(16.00) = 45.98 + 32.07 + 64.00 = <b>142.05 g/mol</b>.'},
 {t:'mc', q:'How many moles of oxygen atoms are in 1 mol of Al₂(SO₄)₃?', o:['4','7','12','3'], a:2, e:'The 3 outside the bracket multiplies SO₄: 3 × 4 = 12 O atoms per formula unit → 12 mol.'},
 {t:'num', q:'How many moles of hydrogen atoms are in 2.5 mol of CH₄?', a:10, u:'mol H', e:'Each CH₄ has 4 H: 2.5 × 4 = <b>10 mol H</b>.'},
 {t:'num', q:'What is the mass of 0.250 mol of Ca(OH)₂?', a:18.524, u:'g', e:'Molar mass = 40.08 + 2(16.00) + 2(1.008) = 74.10 g/mol. 0.250 × 74.10 = <b>18.5 g</b>.'},
 {t:'num', q:'How many moles are in 50.0 g of NaCl?', a:0.8556, u:'mol', e:'Molar mass NaCl = 22.99 + 35.45 = 58.44 g/mol. 50.0 ÷ 58.44 = <b>0.856 mol</b>.'},
 {t:'num', q:'How many chloride ions (Cl⁻) are in 1.00 mol of MgCl₂?', a:1.204e24, u:'ions', e:'1 mol MgCl₂ has 2 mol Cl⁻. 2 × 6.02 × 10²³ = <b>1.20 × 10²⁴ ions</b>.'},
 {t:'mc', q:'What is the molar mass of (NH₄)₂SO₄?', o:['114.11 g/mol','132.15 g/mol','118.14 g/mol','66.07 g/mol'], a:1, e:'2 N (28.02) + 8 H (8.064) + 1 S (32.07) + 4 O (64.00) = 132.15 g/mol. The bracket doubles N AND H.'}
]},
{id:'L4', title:'Quiz 4 · Percent Composition, Empirical & Molecular Formulas', color:'#3f3266', qs:[
 {t:'num', q:'What is the percent by mass of oxygen in water, H₂O?', a:88.81, u:'%', e:'16.00 ÷ 18.02 × 100 = <b>88.8 %</b>.'},
 {t:'num', q:'What is the percent by mass of carbon in methane, CH₄?', a:74.87, u:'%', e:'Molar mass = 12.01 + 4(1.008) = 16.04. 12.01 ÷ 16.04 × 100 = <b>74.9 %</b>.'},
 {t:'mc', q:'What is the empirical formula of glucose, C₆H₁₂O₆?', o:['C₆H₁₂O₆','CH₂O','C₂H₄O₂','CHO'], a:1, e:'Divide every subscript by 6: C₁H₂O₁ → CH₂O.'},
 {t:'mc', q:'What is the empirical formula of N₂O₄?', o:['NO','N₂O','NO₂','N₂O₄'], a:2, e:'Divide by 2: NO₂.'},
 {t:'f', q:'A compound is 75.0 % C and 25.0 % H by mass. Write its empirical formula.', a:'CH4', e:'Assume 100 g: C 75.0 ÷ 12.01 = 6.245 mol; H 25.0 ÷ 1.008 = 24.80 mol. ÷ 6.245 → C 1, H 3.97 ≈ 4 → <b>CH₄</b>.'},
 {t:'f', q:'A compound has empirical formula CH₂ and molar mass 56.1 g/mol. Write its molecular formula.', a:'C4H8', e:'Empirical mass = 12.01 + 2(1.008) = 14.03. n = 56.1 ÷ 14.03 = 4.00 → <b>C₄H₈</b>.'},
 {t:'mc', q:'Your mole ratio comes out 1 : 1.33. What should you multiply by to get whole numbers?', o:['2','3','4','round 1.33 down to 1'], a:1, e:'1.33 is 1⅓, so × 3 gives 3 : 4. Never round away a .33!'},
 {t:'f', q:'2.70 g of aluminium combines with 2.40 g of oxygen. Write the empirical formula.', a:'Al2O3', e:'Al: 2.70 ÷ 26.98 = 0.1001 mol; O: 2.40 ÷ 16.00 = 0.150 mol. Ratio 1 : 1.50 → × 2 → <b>Al₂O₃</b>.'}
]},
{id:'L5', title:'Quiz 5 · Hydrates', color:'#5a2f38', qs:[
 {t:'mc', q:'What is the name of CuSO₄·5H₂O?', o:['copper(II) sulfate hexahydrate','copper(II) sulfate pentahydrate','copper sulfate five water','copper(II) sulfate anhydrate'], a:1, e:'penta- means 5.'},
 {t:'mc', q:'Which prefix means 7 water molecules?', o:['hexa-','hepta-','octa-','nona-'], a:1, e:'hexa 6, hepta 7, octa 8, nona 9.'},
 {t:'mc', q:'"Anhydrous" means…', o:['with extra water','without water','dissolved in water','made only of water'], a:1, e:'an- = without, hydrous = water. It is what is left after heating a hydrate.'},
 {t:'num', q:'A 2.50 g hydrate sample weighs 1.60 g after heating to constant mass. What mass of water was lost?', a:0.9, u:'g', e:'Before − after: 2.50 − 1.60 = <b>0.90 g</b>.'},
 {t:'num', int:true, q:'That sample was CuSO₄·xH₂O (CuSO₄ = 159.62 g/mol). Find x.', a:5, u:'', e:'Water: 0.90 ÷ 18.02 = 0.0499 mol. CuSO₄: 1.60 ÷ 159.62 = 0.01002 mol. x = 0.0499 ÷ 0.01002 = 4.98 ≈ <b>5</b>.'},
 {t:'num', q:'What mass of water is in 1 mol of Na₂CO₃·10H₂O?', a:180.2, u:'g', e:'10 mol H₂O × 18.02 g/mol = <b>180.2 g</b>.'},
 {t:'num', q:'What is the percent by mass of water in CuSO₄·5H₂O?', a:36.08, u:'%', e:'Water = 5 × 18.02 = 90.10 g. Total = 159.62 + 90.10 = 249.72 g. 90.10 ÷ 249.72 × 100 = <b>36.1 %</b>.'},
 {t:'mc', q:'Why do you keep heating until the mass stops changing?', o:['To melt the crystal','To be sure ALL the water has been driven off','To make the salt heavier','To change its colour'], a:1, e:'If any water is left, the "water lost" is too small and x comes out wrong.'}
]},
{id:'F', title:'Final Test · All Lessons', color:'#4a4a5a', qs:[
 {t:'num', q:'How many molecules are in 36.04 g of water?', a:1.204e24, u:'molecules', e:'36.04 ÷ 18.02 = 2.000 mol; 2.000 × 6.02 × 10²³ = <b>1.20 × 10²⁴ molecules</b>.'},
 {t:'num', q:'What is the mass of 1.204 × 10²⁴ molecules of CO₂?', a:88.02, u:'g', e:'1.204 × 10²⁴ ÷ 6.02 × 10²³ = 2.00 mol; 2.00 × 44.01 = <b>88.0 g</b>.'},
 {t:'num', q:'What is the percent by mass of nitrogen in NH₄NO₃?', a:35.0, u:'%', e:'2 N = 28.02 g; molar mass = 2(14.01) + 4(1.008) + 3(16.00) = 80.05 g/mol. 28.02 ÷ 80.05 × 100 = <b>35.0 %</b>.'},
 {t:'f', q:'A compound is 40.0 % S and 60.0 % O by mass. Write its empirical formula.', a:'SO3', e:'S: 40.0 ÷ 32.07 = 1.247 mol; O: 60.0 ÷ 16.00 = 3.75 mol. Ratio 1 : 3.01 → <b>SO₃</b>.'},
 {t:'num', int:true, q:'4.93 g of MgSO₄·xH₂O is heated to constant mass: 2.41 g remain (MgSO₄ = 120.38 g/mol). Find x.', a:7, u:'', e:'Water = 2.52 g ÷ 18.02 = 0.1398 mol; MgSO₄ = 2.41 ÷ 120.38 = 0.02002 mol; x = 6.99 ≈ <b>7</b> (heptahydrate).'},
 {t:'mc', q:'Which sample has the greatest mass?', o:['1 mol of NaCl','2 mol of H₂O','0.5 mol of CaCO₃','3 mol of He'], a:0, e:'NaCl 58.44 g; 2 H₂O 36.04 g; 0.5 CaCO₃ 50.04 g; 3 He 12.01 g.'},
 {t:'num', q:'How many moles of oxygen ATOMS are in 4.40 g of CO₂?', a:0.2, u:'mol O', e:'4.40 ÷ 44.01 = 0.100 mol CO₂; each has 2 O → <b>0.200 mol O</b>.'},
 {t:'f', q:'A gas has empirical formula CH and molar mass 26.04 g/mol. Write its molecular formula.', a:'C2H2', e:'Empirical mass = 13.02; n = 26.04 ÷ 13.02 = 2 → <b>C₂H₂</b> (acetylene).'},
 {t:'mc', q:'What is the mass of 1 mol of oxygen GAS, O₂?', o:['8.00 g','16.00 g','32.00 g','6.02 × 10²³ g'], a:2, e:'Oxygen gas is diatomic: 2 × 16.00 = 32.00 g.'},
 {t:'num', q:'What is the mass of ONE water molecule, in grams?', a:2.993e-23, u:'g', e:'18.02 g/mol ÷ 6.02 × 10²³ molecules/mol = <b>2.99 × 10⁻²³ g</b>.'}
]},
{id:'C', title:'Concept Check · 20 Questions on Every Idea', color:'#04505a', qs:[
 {t:'mc', q:'A mole is best described as…', o:['the mass of one atom','a counting unit equal to 6.02 × 10²³ particles','the volume of a gas','the number of protons in an atom'], a:1, e:'Like a dozen (12) or a ream (500), a mole is a counting word: 6.02 × 10²³ particles.'},
 {t:'mc', q:'One carbon-12 atom has a mass of 12 amu. What is the mass of 0.50 mol of carbon-12 atoms, in amu?', o:['6 amu','3.61 × 10²⁴ amu','6.02 × 10²³ amu','12 amu'], a:1, e:'0.50 mol is not "half an atom" — it is 0.50 × 6.02 × 10²³ = 3.01 × 10²³ atoms. Each is 12 amu: 3.01 × 10²³ × 12 = <b>3.61 × 10²⁴ amu</b>. (0.50 × 12 = 6 gives <b>grams</b>, not amu: 6 g.)'},
 {t:'num', q:'What is the mass in GRAMS of 0.25 mol of carbon-12 atoms (12 g/mol)?', a:3, u:'g', e:'Moles × molar mass: 0.25 mol × 12 g/mol = <b>3.0 g</b>. Multiplying moles by the periodic-table number always gives grams.'},
 {t:'num', q:'How many atoms are in 0.75 mol of copper?', a:4.515e23, u:'atoms', e:'0.75 × 6.02 × 10²³ = <b>4.52 × 10²³ atoms</b>.'},
 {t:'num', q:'How many moles are 9.03 × 10²³ atoms of aluminium?', a:1.5, u:'mol', e:'9.03 × 10²³ ÷ 6.02 × 10²³ = <b>1.50 mol</b>.'},
 {t:'mc', q:'A student says "1 mol of O₂ gas contains 6.02 × 10²³ oxygen atoms." Is this right?', o:['Yes, exactly right','No — it contains 6.02 × 10²³ molecules, which is 1.20 × 10²⁴ atoms','No — it contains 3.01 × 10²³ atoms','No — a mole of gas has no atoms'], a:1, e:'Each O₂ molecule has 2 atoms. 1 mol of molecules × 2 = 2 mol of atoms = <b>1.20 × 10²⁴ atoms</b>.'},
 {t:'mc', q:'Which contains more atoms: 10 g of magnesium or 10 g of copper?', o:['10 g of magnesium','10 g of copper','They are equal','Impossible to tell'], a:0, e:'Lighter atoms → more of them in the same mass. Mg: 10 ÷ 24.31 = 0.411 mol; Cu: 10 ÷ 63.55 = 0.157 mol. Magnesium has about 2.6 × as many atoms.'},
 {t:'num', q:'What is the mass of 1.50 mol of water, H₂O?', a:27.024, u:'g', e:'Molar mass H₂O = 18.02 g/mol. 1.50 × 18.02 = <b>27.0 g</b>.'},
 {t:'num', q:'How many molecules are in 22.0 g of CO₂?', a:3.009e23, u:'molecules', e:'22.0 ÷ 44.01 = 0.500 mol; 0.500 × 6.02 × 10²³ = <b>3.01 × 10²³ molecules</b>.'},
 {t:'mc', q:'How many moles of oxygen atoms are in 2 mol of H₂SO₄?', o:['4','6','8','2'], a:2, e:'Each H₂SO₄ has 4 O. 2 × 4 = <b>8 mol O</b>.'},
 {t:'num', q:'Calculate the molar mass of Mg(NO₃)₂.', a:148.33, u:'g/mol', e:'The 2 doubles everything in the bracket: Mg 24.31 + N 2(14.01) + O 6(16.00) = 24.31 + 28.02 + 96.00 = <b>148.33 g/mol</b>.'},
 {t:'num', int:true, q:'How many moles of atoms IN TOTAL are in 1 mol of glucose, C₆H₁₂O₆?', a:24, u:'mol', e:'Add the subscripts: 6 + 12 + 6 = <b>24 mol</b> of atoms.'},
 {t:'num', q:'What is the mass of ONE gold atom (Au = 196.97 g/mol), in grams?', a:3.272e-22, u:'g', e:'Molar mass ÷ Avogadro\'s number: 196.97 ÷ 6.02 × 10²³ = <b>3.27 × 10⁻²² g</b>.'},
 {t:'num', q:'What is the percent by mass of calcium in CaCO₃?', a:40.04, u:'%', e:'Molar mass = 40.08 + 12.01 + 3(16.00) = 100.09 g/mol. 40.08 ÷ 100.09 × 100 = <b>40.0 %</b>.'},
 {t:'num', q:'How many grams of oxygen are in 50.0 g of Fe₂O₃?', a:15.03, u:'g', e:'% O = 48.00 ÷ 159.70 × 100 = 30.06 %. 30.06 % of 50.0 g = <b>15.0 g O</b>.'},
 {t:'mc', q:'How does the percent composition of CH₂O compare with that of C₆H₁₂O₆?', o:['C₆H₁₂O₆ has 6 times more carbon by percent','They are exactly the same','CH₂O has more oxygen by percent','They cannot be compared'], a:1, e:'Same empirical formula = same ratio of atoms = same percent composition (40.0 % C, 6.7 % H, 53.3 % O). Only the molar mass differs.'},
 {t:'f', q:'A compound is 52.2 % C, 13.0 % H and 34.8 % O by mass. Write its empirical formula.', a:'C2H6O', e:'Assume 100 g: C 52.2 ÷ 12.01 = 4.346; H 13.0 ÷ 1.008 = 12.90; O 34.8 ÷ 16.00 = 2.175 mol. ÷ 2.175 → 2.00 : 5.93 : 1 → <b>C₂H₆O</b>.'},
 {t:'mc', q:'Your mole ratio comes out 1 : 2.5. What are the whole-number subscripts?', o:['1 : 2','1 : 3','2 : 5','4 : 10'], a:2, e:'2.5 is "two and a half", so multiply both by 2: <b>2 : 5</b>. (4 : 10 is not the simplest ratio.)'},
 {t:'f', q:'A compound has empirical formula NO₂ and molar mass 92.02 g/mol. Write its molecular formula.', a:'N2O4', e:'Empirical mass = 14.01 + 2(16.00) = 46.01. n = 92.02 ÷ 46.01 = 2 → <b>N₂O₄</b>.'},
 {t:'num', int:true, q:'6.11 g of BaCl₂·xH₂O is heated to constant mass: 5.21 g remain (BaCl₂ = 208.23 g/mol). Find x.', a:2, u:'', e:'Water = 6.11 − 5.21 = 0.90 g ÷ 18.02 = 0.0499 mol. BaCl₂ = 5.21 ÷ 208.23 = 0.0250 mol. x = 2.00 → <b>BaCl₂·2H₂O</b> (dihydrate).'}
]}
];
