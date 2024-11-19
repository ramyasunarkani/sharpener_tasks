const form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const obj={
        name,
        email,
        phone,
    }
    localStorage.setItem('userDetails',JSON.stringify(obj));
   
});