const listItem=document.querySelectorAll('.fruit');
for(let i=0;i<listItem.length;i++){
    if(!listItem[i].querySelector('.edit-btn')){
        const editButton=document.createElement('button');
        editButton.innerHTML='Edit';
        editButton.className='edit-btn';
        listItem[i].appendChild(editButton);

    }
}

const fruits=document.querySelector('.fruits');
const form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById('add-fruit');
    const newLi=document.createElement('li');
    newLi.className='fruit';
    newLi.innerHTML = fruitToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';
    fruits.append(newLi);



});

fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const remove=event.target.parentElement;
        fruits.removeChild(remove);
    }
});
