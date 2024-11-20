function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const userdetails={username,email,phone};
    localStorage.setItem(email,JSON.stringify(userdetails));
    display();
}
function display(){
    const userList=document.getElementById('userList');
    userList.innerHTML='';
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const user=JSON.parse(localStorage.getItem(key));
        const li=document.createElement('li');
        li.innerHTML=`${user.username}-${user.email}-${user.phone} `;
        const deletebtn=document.createElement('button');
        deletebtn.innerHTML='Delete';
        deletebtn.onclick=function(){
            deleteuser(key);
        };
        li.appendChild(deletebtn);
        userList.appendChild(li);
    }
}
 function deleteuser(key){
    localStorage.removeItem(key);
    display();
};