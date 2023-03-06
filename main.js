myform=document.querySelector('#my-form');
names=document.querySelector('#name');
email=document.querySelector('#email');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(name.value===''||email.value===''){
        alert('Enter your Username and Email ID');
    }
    else{
        localStorage.setItem('name1',names.value);
        localStorage.setItem('email1',email.value);
    }
}