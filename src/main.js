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
const serviceLIst = document.getElementById('serviceLIst');
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
    //frame pictures
    setTimeout(()=>  akronTape0.classList.add('hidden'), 23250);
    setTimeout(()=>  akronTape1.classList.add('hidden'), 23500);
    setTimeout(()=>  akronTape2.classList.add('hidden'), 23750);
    setTimeout(()=>  akronTape3.classList.add('hidden'), 24000);
    setTimeout(()=>  akronBackground.classList.add('bg-[#6e6253]'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('bg-gradient-to-br'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('from-amber-50'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('via-amber-100'), 24500);
    setTimeout(()=>  akronBackground.classList.remove('to-amber-50'), 24500);    
    setTimeout(()=>  akronBackground.classList.remove('rotate-[0.5deg]'), 25000);
    setTimeout(()=>  akronBackground.classList.add('shadow-md'), 25000);    
    setTimeout(()=>  akronBackground.classList.add('shadow-gray-700'), 25000);
    setTimeout(()=>  akron.classList.remove('saturate-50'), 26000);
    setTimeout(()=>  akron.classList.remove('opacity-75'), 26000);
    setTimeout(()=>  akron.classList.remove('contrast-60'), 26000);
    setTimeout(()=>  akron.classList.add('shadow-inner'), 26000);
    setTimeout(()=>  akron.classList.add('shadow-gray-700'), 26000);
}