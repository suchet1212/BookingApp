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
        let myObj_deserialized=JSON.parse(localStorage.getItem("MyObj"));
        console.log(myObj_deserialized);
    }
}