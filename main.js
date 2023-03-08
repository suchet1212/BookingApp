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
        //localStorage.setItem('name1',names.value);
        //localStorage.setItem('email1',email.value);

        let myObj={
            name:names.value,
            email:email.value
        };
        myObj_serialized=JSON.stringify(myObj);
        localStorage.setItem(myObj.name,myObj_serialized);
        showUsers(myObj);
    }
    function showUsers(Obj){
    let parent= document.getElementById('users');
    let child=document.createElement('li');
    child.textContent=Obj.name+" - "+Obj.email;
     let del=document.createElement('input');
     del.class='btn';
     del.type='button';
     del.value='delete';
     
     del.onclick=()=>{
        parent.removeChild(child);
        localStorage.removeItem(Obj.name);
     }
     let edit =document.createElement('input');
     edit.class='btn';
     edit.type='button';
     edit.value='edit';
     edit.onclick=()=>{
        let n=document.getElementById('name');
        n.value=Obj.name;
        let e=document.getElementById('email');
        e.value=Obj.email;
        localStorage.removeItem(Obj.name);
     }
     
     child.appendChild(del);
     child.appendChild(edit);
     parent.appendChild(child);

    }
}

