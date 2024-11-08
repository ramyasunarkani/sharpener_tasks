const main=document.querySelector('#main_heading');
main.style.textAlign='center';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basket=document.querySelector(' div h2');
basket.style.marginLeft='30px';

// const fruitItem=document.querySelector('.fruit');
// fruitItem.style.backgroundColor='white';

// const fruitItem=document.querySelector('.fruit:nth-child(3)');
// fruitItem.style.backgroundColor='white';

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++){
    fruitItems[i].style.backgroundColor='white';
    fruitItems[i].style.padding='20px';
    fruitItems[i].style.margin='20px';
    fruitItems[i].style.borderRadius='5px';
}

main.style.textAlign='right';
basket.style.color='brown';

const oddfruits=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<oddfruits.length;i++){
    oddfruits[i].style.backgroundColor='lightgrey';
    oddfruits[i].style.padding='20px';
    oddfruits[i].style.margin='20px';
    oddfruits[i].style.borderRadius='5px';
}
const evenfruits=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenfruits.length;i++){
    evenfruits[i].style.backgroundColor='brown';
    evenfruits[i].style.padding='20px';
    evenfruits[i].style.margin='20px';
    evenfruits[i].style.borderRadius='10px';
}