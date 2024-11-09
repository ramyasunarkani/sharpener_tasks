
// const para=document.createElement('p');
// const paraText=document.createTextNode('Total fruits: 4');
// para.appendChild(paraText);
// const divs=document.querySelectorAll('div');
// const fruits=document.querySelector('.fruits')
// const fruit=document.querySelector('.fruit');
// fruits.insertBefore(para,fruit);

const subHeading=document.createElement('h3');
subHeading.innerHTML='Buy high quality organic fruits online';
const divs=document.querySelectorAll('div');
divs[0].appendChild(subHeading);
subHeading.style.fontStyle='italic';

const para=document.createElement('p');
para.innerHTML='Total fruits: 4';
const fruit=document.querySelector('.fruits');
divs[1].insertBefore(para,fruit);
para.setAttribute('id','fruits-total');