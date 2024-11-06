const main_heading=document.getElementById('main_heading');
main_heading.textContent='Fruite World';
main_heading.style.color='orange';

let div=document.getElementById('header');
div.style.backgroundColor='green';
div.style.borderBottom="4px solid orange";

const heading=document.getElementById('basket-heading')
heading.style.color="green";

const t=document.getElementById('thanks');
const para=document.createElement('p');
//para.textContent='Please visit us again';
const ts=document.createTextNode('Please visit us again');
para.appendChild(ts);
t.appendChild(para);