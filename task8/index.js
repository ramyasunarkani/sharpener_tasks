const form=document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputs=document.querySelectorAll('.inputs');
    localStorage.setItem('Username',inputs[0].value);
    localStorage.setItem('Email',inputs[1].value);
    localStorage.setItem('Phone',inputs[2].value);
    inputs[0].value='';
    inputs[1].value='';
    inputs[2].value='';

});