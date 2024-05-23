const main = document.querySelector('main');
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const rethink = document.getElementById('rethink');
const contact = document.getElementById('contact');
const ohio = document.getElementById('ohio');
const savings = document.getElementById('savings');
const reasons = document.getElementById('reasons');
const akron = document.getElementById('akron');
const akronBackground = document.getElementById('akronBackground');
const akronTape0 = document.getElementById('akronTape0');
const akronTape1 = document.getElementById('akronTape1');
const akronTape2 = document.getElementById('akronTape2');
const akronTape3 = document.getElementById('akronTape3');
const cleveland = document.getElementById('cleveland');
const clevelandBackground = document.getElementById('clevelandBackground');
const clevelandTape0 = document.getElementById('clevelandTape0');
const clevelandTape1 = document.getElementById('clevelandTape1');
const clevelandTape2 = document.getElementById('clevelandTape2');
const clevelandTape3 = document.getElementById('clevelandTape3');
const mansfield = document.getElementById('mansfield');
const mansfieldBackground = document.getElementById('mansfieldBackground');
const mansfieldTape0 = document.getElementById('mansfieldTape0');
const mansfieldTape1 = document.getElementById('mansfieldTape1');
const mansfieldTape2 = document.getElementById('mansfieldTape2');
const mansfieldTape3 = document.getElementById('mansfieldTape3');
const house = document.getElementById('house');
const houseBackground = document.getElementById('houseBackground');
const houseTape0 = document.getElementById('houseTape0');
const houseTape1 = document.getElementById('houseTape1');
const houseTape2 = document.getElementById('houseTape2');
const houseTape3 = document.getElementById('houseTape3');
const serviceList = document.getElementById('serviceList');
const serviceTape0 = document.getElementById('serviceTape0');
const serviceTape1 = document.getElementById('serviceTape1');
const serviceTape2 = document.getElementById('serviceTape2');
const serviceTape3 = document.getElementById('serviceTape3');

document.addEventListener('DOMContentLoaded', glowUp());

function glowUp(){
    //Dry out wall
    setTimeout(()=>  main.classList.add('animate-dry'), 2000);
    setTimeout(()=>  main.classList.add('bg-gray-500'), 7000);
    setTimeout(()=>  main.classList.remove('bg-gradient-to-b'), 7000);
    setTimeout(()=>  main.classList.remove('from-zinc-500'), 7000);
    setTimeout(()=>  main.classList.remove('from-55%'), 7000);
    setTimeout(()=>  main.classList.remove('to-neutral-600'), 7000);
    setTimeout(()=>  main.classList.remove('to-60%'), 7000);
    setTimeout(()=>  main.classList.remove('bg-fixed'), 7000);
    setTimeout(()=>  main.classList.remove('animate-dry'), 7000);
    //Paint wall
    setTimeout(()=>  main.classList.add('animate-lightenWall'), 7000);
    setTimeout(()=>  main.classList.add('bg-[#bfdce0]'), 14000);
    setTimeout(()=>  main.classList.remove('bg-gray-500'), 14000);
    setTimeout(()=>  main.classList.remove('animate-lightenWall'), 14000);
    //Paint Ceiling
    setTimeout(()=>  header.classList.add('animate-lightenCeiling'), 10000);
    setTimeout(()=>  header.classList.add('bg-[#ede7df]'), 15000);
    setTimeout(()=>  header.classList.add('text-[#302920]'), 15000);
    setTimeout(()=>  header.classList.remove('bg-[#635b50]'), 15000);
    setTimeout(()=>  header.classList.remove('text-[#ebe6e1]'), 15000);
    setTimeout(()=>  header.classList.add('animate-addCeilingLight'), 15000);
    setTimeout(()=>  header.classList.add('bg-[#fcf5eb]'), 15500);
    setTimeout(()=>  header.classList.add('border-yellow-100'), 15500);
    setTimeout(()=>  header.classList.add('border-b-4'), 15500);
    setTimeout(()=>  header.classList.add('shadow-yellow-100'), 15500);
    setTimeout(()=>  header.classList.remove('shadow-zinc-900'), 15500);
    //paint sections
    setTimeout(()=>  rethink.classList.remove('bg-zinc-100'), 15600);
    setTimeout(()=>  rethink.classList.add('bg-[#eaebe6]'), 15600);
    setTimeout(()=>  rethink.classList.remove('border-zinc-200'), 15600);
    setTimeout(()=>  rethink.classList.add('border-[#d8d9d4]'), 15600);
    setTimeout(()=>  contact.classList.remove('bg-slate-100'), 15700);
    setTimeout(()=>  contact.classList.add('bg-[#e8e5e3]'), 15700);
    setTimeout(()=>  contact.classList.remove('border-slate-200'), 15700);
    setTimeout(()=>  contact.classList.add('border-[#d9d6d4]'), 15700);
    setTimeout(()=>  ohio.classList.remove('bg-stone-200'), 15800);
    setTimeout(()=>  ohio.classList.add('bg-[#dfe6e5]'), 15800);
    setTimeout(()=>  ohio.classList.remove('border-stone-300'), 15800);
    setTimeout(()=>  ohio.classList.add('border-[#d0d6d5]'), 15800);
    setTimeout(()=>  savings.classList.remove('bg-zinc-100'), 15900);
    setTimeout(()=>  savings.classList.add('bg-[#e2e3e1]'), 15900);
    setTimeout(()=>  savings.classList.remove('border-zinc-200'), 15900);
    setTimeout(()=>  savings.classList.add('border-[#d6d6d4]'), 15900);
    setTimeout(()=>  reasons.classList.remove('bg-zinc-200'), 15950);
    setTimeout(()=>  reasons.classList.add('bg-[#dfe6e5]'), 15950);
    setTimeout(()=>  reasons.classList.remove('border-zinc-300'), 15950);
    setTimeout(()=>  reasons.classList.add('border-[#d0d6d5]'), 15950);
    setTimeout(()=>  other.classList.remove('bg-slate-200'), 16000);
    setTimeout(()=>  other.classList.add('bg-[#e8e5e3]'), 16000);
    setTimeout(()=>  other.classList.remove('border-slate-300'), 16000);
    setTimeout(()=>  other.classList.add('border-[#d0d6d5]'), 16000);
    //add carpet
    setTimeout(()=>  footer.classList.add('animate-unfurl'), 15500);
    setTimeout(()=>  footer.classList.remove('bg-neutral-700'), 16000);
    setTimeout(()=>  footer.classList.add('bg-[#ffeee6]'), 16000);
    setTimeout(()=>  footer.classList.add('text-stone-800'), 16000);
    setTimeout(()=>  footer.classList.remove('text-stone-50'), 16000);
    setTimeout(()=>  footer.classList.remove('animate-unfurl'), 22000);
    //frame akron picture
    setTimeout(()=>  akronTape0.classList.add('hidden'), 16250);
    setTimeout(()=>  akronTape1.classList.add('hidden'), 16500);
    setTimeout(()=>  akronTape2.classList.add('hidden'), 16750);
    setTimeout(()=>  akronTape3.classList.add('hidden'), 17000);
    setTimeout(()=>  akronBackground.classList.add('bg-[#6e6253]'), 17500);
    setTimeout(()=>  akronBackground.classList.remove('bg-gradient-to-br'), 17500);
    setTimeout(()=>  akronBackground.classList.remove('from-amber-50'), 17500);
    setTimeout(()=>  akronBackground.classList.remove('via-amber-100'), 17500);
    setTimeout(()=>  akronBackground.classList.remove('to-amber-50'), 17500);    
    setTimeout(()=>  akronBackground.classList.add('shadow-md'), 18000);    
    setTimeout(()=>  akronBackground.classList.add('shadow-gray-700'), 18000);
    setTimeout(()=>  akron.classList.remove('saturate-50'), 19000);
    setTimeout(()=>  akron.classList.remove('opacity-75'), 19000);
    setTimeout(()=>  akron.classList.remove('contrast-60'), 19000);
    setTimeout(()=>  akron.classList.add('shadow-inner'), 19000);
    setTimeout(()=>  akron.classList.add('shadow-gray-700'), 19000);
    setTimeout(()=>  akronBackground.classList.remove('rotate-[0.5deg]'), 20000);
    //frame mansfield picture
    setTimeout(()=>  mansfieldTape0.classList.add('hidden'), 17250);
    setTimeout(()=>  mansfieldTape1.classList.add('hidden'), 17500);
    setTimeout(()=>  mansfieldTape2.classList.add('hidden'), 17750);
    setTimeout(()=>  mansfieldTape3.classList.add('hidden'), 18000);
    setTimeout(()=>  mansfieldBackground.classList.add('bg-[#6e6253]'), 18500);
    setTimeout(()=>  mansfieldBackground.classList.remove('bg-gradient-to-br'), 18500);
    setTimeout(()=>  mansfieldBackground.classList.remove('from-amber-50'), 18500);
    setTimeout(()=>  mansfieldBackground.classList.remove('via-amber-100'), 18500);
    setTimeout(()=>  mansfieldBackground.classList.remove('to-amber-50'), 18500);    
    setTimeout(()=>  mansfieldBackground.classList.remove('rotate-[0.3deg]'), 19000);
    setTimeout(()=>  mansfieldBackground.classList.add('shadow-md'), 19000);    
    setTimeout(()=>  mansfieldBackground.classList.add('shadow-gray-700'), 19000);
    setTimeout(()=>  mansfield.classList.remove('saturate-50'), 20000);
    setTimeout(()=>  mansfield.classList.remove('opacity-75'), 20000);
    setTimeout(()=>  mansfield.classList.remove('contrast-60'), 20000);
    setTimeout(()=>  mansfield.classList.add('shadow-inner'), 20000);
    setTimeout(()=>  mansfield.classList.add('shadow-gray-700'), 20000);
    //frame cleveland picture
    setTimeout(()=>  clevelandTape0.classList.add('hidden'), 18250);
    setTimeout(()=>  clevelandTape1.classList.add('hidden'), 18500);
    setTimeout(()=>  clevelandTape2.classList.add('hidden'), 18750);
    setTimeout(()=>  clevelandTape3.classList.add('hidden'), 19000);
    setTimeout(()=>  clevelandBackground.classList.add('bg-[#6e6253]'), 19500);
    setTimeout(()=>  clevelandBackground.classList.remove('bg-gradient-to-br'), 19500);
    setTimeout(()=>  clevelandBackground.classList.remove('from-amber-50'), 19500);
    setTimeout(()=>  clevelandBackground.classList.remove('via-amber-100'), 19500);
    setTimeout(()=>  clevelandBackground.classList.remove('to-amber-50'), 19500);    
    setTimeout(()=>  clevelandBackground.classList.remove('-rotate-[0.5deg]'), 20000);
    setTimeout(()=>  clevelandBackground.classList.add('shadow-md'), 20000);    
    setTimeout(()=>  clevelandBackground.classList.add('shadow-gray-700'), 20000);
    setTimeout(()=>  cleveland.classList.remove('saturate-50'), 21000);
    setTimeout(()=>  cleveland.classList.remove('opacity-75'), 21000);
    setTimeout(()=>  cleveland.classList.remove('contrast-60'), 21000);
    setTimeout(()=>  cleveland.classList.add('shadow-inner'), 21000);
    setTimeout(()=>  cleveland.classList.add('shadow-gray-700'), 21000);
    //frame house picture
    setTimeout(()=>  houseTape0.classList.add('hidden'), 18250);
    setTimeout(()=>  houseTape1.classList.add('hidden'), 18500);
    setTimeout(()=>  houseTape2.classList.add('hidden'), 18750);
    setTimeout(()=>  houseTape3.classList.add('hidden'), 19000);
    setTimeout(()=>  houseBackground.classList.add('bg-[#6e6253]'), 19500);
    setTimeout(()=>  houseBackground.classList.remove('bg-gradient-to-br'), 19500);
    setTimeout(()=>  houseBackground.classList.remove('from-amber-50'), 19500);
    setTimeout(()=>  houseBackground.classList.remove('via-amber-100'), 19500);
    setTimeout(()=>  houseBackground.classList.remove('to-amber-50'), 19500);    
    setTimeout(()=>  houseBackground.classList.remove('-rotate-[-0.5deg]'), 20000);
    setTimeout(()=>  houseBackground.classList.add('shadow-md'), 20000);    
    setTimeout(()=>  houseBackground.classList.add('shadow-gray-700'), 20000);
    setTimeout(()=>  house.classList.remove('saturate-50'), 21000);
    setTimeout(()=>  house.classList.remove('opacity-75'), 21000);
    setTimeout(()=>  house.classList.remove('contrast-50'), 21000);
    setTimeout(()=>  house.classList.add('shadow-inner'), 21000);
    setTimeout(()=>  house.classList.add('shadow-gray-700'), 21000);
    //make services list white board
    setTimeout(()=>  serviceTape0.classList.add('hidden'), 20250);
    setTimeout(()=>  serviceTape1.classList.add('hidden'), 20500);
    setTimeout(()=>  serviceTape2.classList.add('hidden'), 20750);
    setTimeout(()=>  serviceTape3.classList.add('hidden'), 21000);
    setTimeout(()=>  serviceList.classList.add('bg-white'), 21000);
    setTimeout(()=>  serviceList.classList.remove('bg-amber-50'), 21000);
    setTimeout(()=>  serviceList.classList.add('border-gray-100'), 21000);
    setTimeout(()=>  serviceList.classList.add('rounded'), 21000);
    setTimeout(()=>  serviceList.classList.add('border-8'), 21000);
    setTimeout(()=>  serviceList.classList.add('font-salsa'), 22000);
    setTimeout(()=>  serviceList.classList.add('text-[25px]'), 22000);
    setTimeout(()=>  serviceList.classList.remove('font-caveat'), 22000);
    setTimeout(()=>  serviceList.classList.remove('text-[30px]'), 22000);
    setTimeout(()=>  serviceList.classList.add('shadow-md'), 23000);    
    setTimeout(()=>  serviceList.classList.add('shadow-gray-700'), 23000);
    //reveal lightbult
    setTimeout(()=>  addLightbulbs(), 24000);
}

function addLightbulbs(){
    let lightSwitch = document.createElement('button');
    lightSwitch.setAttribute('id', 'lightSwitch');
    lightSwitch.setAttribute('aria-label', 'light switch');
    lightSwitch.classList.add('absolute');
    lightSwitch.classList.add('right-10');
    lightSwitch.classList.add('top-2');
    lightSwitch.classList.add('transition-all');
    lightSwitch.classList.add('duration-1000');
    lightSwitch.classList.add('ease-in-out');  
    let light = document.createElement('img');
    light.setAttribute('id', 'light')
    light.src = '../images/light.png';
    light.alt = 'yellow lightbulb icon';
    light.classList.add('h-6');
    lightSwitch.append(light);
    let blacklight = document.createElement('img');
    blacklight.setAttribute('id', 'blacklight')
    blacklight.src = '../images/blacklight.png';
    blacklight.alt = 'teal lightbulb icon';
    blacklight.classList.add('h-6');
    blacklight.classList.add('hidden');
    lightSwitch.append(blacklight);
    header.append(lightSwitch);
    lightSwitch.setAttribute('onclick', 'toggleLight()');
}

function toggleLight(){
    console.log('toggle light called');
    body.classList.toggle('dark');
    document.getElementById('light').classList.toggle('hidden');
    document.getElementById('blacklight').classList.toggle('hidden');
}