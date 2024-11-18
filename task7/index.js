const listItems=document.querySelectorAll('.fruit');
for(let i=0;i<listItems.length;i++){
    if(!listItems[i].querySelector('.edit-btn')){
        const editbtn=document.createElement('button');
        editbtn.innerHTML='Edit';
        editbtn.className='edit-btn';
        listItems[i].appendChild(editbtn);


    }
}


const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');


fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const remove=event.target.parentElement;
        fruits.removeChild(remove);
    }
});



//adding description input
const addbtn=form.querySelector('button');
const desc=document.createElement('input');
desc.setAttribute('type','text');
desc.setAttribute('id','description');
desc.setAttribute('placeholder','enter description..');
form.insertBefore(desc,addbtn);
//adding to list
form.addEventListener('submit',function(event){
    event.preventDefault();
    const addfruit=document.getElementById('add-fruit');
    const adddec=document.getElementById('description');

    if(addfruit.value.trim()=== '' && adddec.value.trim()===''){
        return;
    }
    const newLi=document.createElement('li');
    newLi.className='fruit';
    newLi.innerHTML = `${addfruit.value}
    <p style="font-style: italic; margin: 0; width:30px">${adddec.value.trim()}</p>
    <button class="delete-btn">x</button>
    <button class="edit-btn">edit</button>`;

    fruits.append(newLi);
    addfruit.value='';
    adddec.value='';
});


const filter=document.getElementById('filter');
filter.addEventListener('keyup',function(event){
    event.preventDefault();
    const textentered=event.target.value.toLowerCase();
    const items=document.getElementsByClassName('fruit');
    for(let i=0;i<items.length;i++){
        const curr=items[i].firstChild.textContent.toLowerCase();
        const description=items[i].querySelector("p") ?items[i].querySelector("p").textContent.toLowerCase() : '';
        if(curr.indexOf(textentered)!==-1 || description.indexOf(textentered)!==-1){
            items[i].style.display='flex';
        }
        else{
            items[i].style.display='none';
        }
    }
});
