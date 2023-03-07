myform=document.querySelector('#my-form');
names=document.querySelector('#name');
email=document.querySelector('#email');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(names.value===''||email.value===''){
        alert('Enter your Username and Email ID');
    }
    else{
        localStorage.setItem('name1',names.value);
        localStorage.setItem('email1',email.value);

        let myObj={
            name:names.value,
            email:email.value
        };
        myObj_serialized=JSON.stringify(myObj);
        localStorage.setItem("MyObj",myObj_serialized);
        showUsers(myObj);
    }
    function showUsers(Obj){
    let parent= document.getElementById('users');
    parent.innerHTML=parent.innerHTML+`<li> ${Obj.name} - ${Obj.email}</li>`;
}
}