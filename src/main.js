const main = document.querySelector('main');
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
    setTimeout(()=>  footer.classList.add('animate-unfurl'), 16500);
    setTimeout(()=>  footer.classList.remove('bg-neutral-700'), 17000);
    setTimeout(()=>  footer.classList.add('bg-[#541c46]'), 17000);
    setTimeout(()=>  footer.classList.remove('animate-unfurl'), 23000);
    //frame akron picture
    setTimeout(()=>  akronTape0.classList.add('hidden'), 23250);
    setTimeout(()=>  akronTape1.classList.add('hidden'), 23500);
    setTimeout(()=>  akronTape2.classList.add('hidden'), 23750);
    setTimeout(()=>  akronTape3.classList.add('hidden'), 24000);
    setTimeout(()=>  akronBackground.classList.add('bg-[#6e6253]'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('bg-gradient-to-br'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('from-amber-50'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('via-amber-100'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('to-amber-50'), 24500);    
    setTimeout(()=>  akronBackground.classList.add('shadow-md'), 25000);    
    setTimeout(()=>  akronBackground.classList.add('shadow-gray-700'), 25000);
    setTimeout(()=>  akron.classList.remove('saturate-50'), 26000);
    setTimeout(()=>  akron.classList.remove('opacity-75'), 26000);
    setTimeout(()=>  akron.classList.remove('contrast-60'), 26000);
    setTimeout(()=>  akron.classList.add('shadow-inner'), 26000);
    setTimeout(()=>  akron.classList.add('shadow-gray-700'), 26000);
    setTimeout(()=>  akronBackground.classList.remove('rotate-[0.5deg]'), 27000);
    //frame mansfield picture
    setTimeout(()=>  mansfieldTape0.classList.add('hidden'), 27250);
    setTimeout(()=>  mansfieldTape1.classList.add('hidden'), 27500);
    setTimeout(()=>  mansfieldTape2.classList.add('hidden'), 27750);
    setTimeout(()=>  mansfieldTape3.classList.add('hidden'), 28000);
    setTimeout(()=>  mansfieldBackground.classList.add('bg-[#6e6253]'), 28500);
    setTimeout(()=>  mansfieldBackground.classList.remove('bg-gradient-to-br'), 28500);
    setTimeout(()=>  mansfieldBackground.classList.remove('from-amber-50'), 28500);
    setTimeout(()=>  mansfieldBackground.classList.remove('via-amber-100'), 28500);
    setTimeout(()=>  mansfieldBackground.classList.remove('to-amber-50'), 28500);    
    setTimeout(()=>  mansfieldBackground.classList.remove('rotate-[0.3deg]'), 29000);
    setTimeout(()=>  mansfieldBackground.classList.add('shadow-md'), 29000);    
    setTimeout(()=>  mansfieldBackground.classList.add('shadow-gray-700'), 29000);
    setTimeout(()=>  mansfield.classList.remove('saturate-50'), 30000);
    setTimeout(()=>  mansfield.classList.remove('opacity-75'), 30000);
    setTimeout(()=>  mansfield.classList.remove('contrast-60'), 30000);
    setTimeout(()=>  mansfield.classList.add('shadow-inner'), 30000);
    setTimeout(()=>  mansfield.classList.add('shadow-gray-700'), 30000);
    //frame cleveland picture
    setTimeout(()=>  clevelandTape0.classList.add('hidden'), 31250);
    setTimeout(()=>  clevelandTape1.classList.add('hidden'), 31500);
    setTimeout(()=>  clevelandTape2.classList.add('hidden'), 31750);
    setTimeout(()=>  clevelandTape3.classList.add('hidden'), 32000);
    setTimeout(()=>  clevelandBackground.classList.add('bg-[#6e6253]'), 32500);
    setTimeout(()=>  clevelandBackground.classList.remove('bg-gradient-to-br'), 32500);
    setTimeout(()=>  clevelandBackground.classList.remove('from-amber-50'), 32500);
    setTimeout(()=>  clevelandBackground.classList.remove('via-amber-100'), 32500);
    setTimeout(()=>  clevelandBackground.classList.remove('to-amber-50'), 32500);    
    setTimeout(()=>  clevelandBackground.classList.remove('-rotate-[0.5deg]'), 33000);
    setTimeout(()=>  clevelandBackground.classList.add('shadow-md'), 33000);    
    setTimeout(()=>  clevelandBackground.classList.add('shadow-gray-700'), 33000);
    setTimeout(()=>  cleveland.classList.remove('saturate-50'), 34000);
    setTimeout(()=>  cleveland.classList.remove('opacity-75'), 34000);
    setTimeout(()=>  cleveland.classList.remove('contrast-60'), 34000);
    setTimeout(()=>  cleveland.classList.add('shadow-inner'), 34000);
    setTimeout(()=>  cleveland.classList.add('shadow-gray-700'), 34000);
    //frame house picture
    setTimeout(()=>  houseTape0.classList.add('hidden'), 32250);
    setTimeout(()=>  houseTape1.classList.add('hidden'), 32500);
    setTimeout(()=>  houseTape2.classList.add('hidden'), 32750);
    setTimeout(()=>  houseTape3.classList.add('hidden'), 33000);
    setTimeout(()=>  houseBackground.classList.add('bg-[#6e6253]'), 33500);
    setTimeout(()=>  houseBackground.classList.remove('bg-gradient-to-br'), 33500);
    setTimeout(()=>  houseBackground.classList.remove('from-amber-50'), 33500);
    setTimeout(()=>  houseBackground.classList.remove('via-amber-100'), 33500);
    setTimeout(()=>  houseBackground.classList.remove('to-amber-50'), 33500);    
    setTimeout(()=>  houseBackground.classList.remove('-rotate-[-0.5deg]'), 34000);
    setTimeout(()=>  houseBackground.classList.add('shadow-md'), 34000);    
    setTimeout(()=>  houseBackground.classList.add('shadow-gray-700'), 34000);
    setTimeout(()=>  house.classList.remove('saturate-50'), 35000);
    setTimeout(()=>  house.classList.remove('opacity-75'), 35000);
    setTimeout(()=>  house.classList.remove('contrast-60'), 35000);
    setTimeout(()=>  house.classList.add('shadow-inner'), 35000);
    setTimeout(()=>  house.classList.add('shadow-gray-700'), 35000);
    //make services list white board
    setTimeout(()=>  serviceTape0.classList.add('hidden'), 35250);
    setTimeout(()=>  serviceTape1.classList.add('hidden'), 35500);
    setTimeout(()=>  serviceTape2.classList.add('hidden'), 35750);
    setTimeout(()=>  serviceTape3.classList.add('hidden'), 36000);
    setTimeout(()=>  serviceList.classList.add('bg-white'), 36000);
    setTimeout(()=>  serviceList.classList.remove('bg-amber-50'), 36000);
    setTimeout(()=>  serviceList.classList.add('border-gray-100'), 36000);
    setTimeout(()=>  serviceList.classList.add('rounded'), 36000);
    setTimeout(()=>  serviceList.classList.add('border-8'), 36000);
    setTimeout(()=>  serviceList.classList.add('font-salsa'), 37000);
    setTimeout(()=>  serviceList.classList.add('text-[25px]'), 37000);
    setTimeout(()=>  serviceList.classList.remove('font-caveat'), 37000);
    setTimeout(()=>  serviceList.classList.remove('text-[30px]'), 37000);
    setTimeout(()=>  serviceList.classList.add('shadow-md'), 38000);    
    setTimeout(()=>  serviceList.classList.add('shadow-gray-700'), 38000);
}