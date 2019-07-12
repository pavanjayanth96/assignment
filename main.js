import { saveCustomerData , getCustomerData} from "./lib.js";


//document.body.onload=function(){
    document.forms[0].addEventListener("submit",async function submitform(e){

        e.preventDefault();
     let firstname=document.querySelector("#firstname").value;
     let errorMsgFirstName=document.querySelector("#First_err");

     let lastname=document.querySelector("#lastname").value;
     
     let email=document.querySelector("#email").value;
     let errorMsgEmail=document.querySelector("#email_err");

     let mobile=document.querySelector("#mobile").value;
     let errorMsgPhone= document.querySelector("#Mobile_err");

     var alphaExp = /^[a-zA-Z]+$/;
     if(firstname==""){
          // alert("FirstName");
      
          errorMsgFirstName.style.color="red";
          errorMsgFirstName.textContent="First Name Cannot be empty";
            return false;
        }
        if( !firstname.match(alphaExp)){
            errorMsgFirstName.style.color="red";
            errorMsgFirstName.textContent="First Name Must Be Alphabet";
            // alert("Must Be Alphabet");
            return false;
        }


        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email==""  ){
            errorMsgEmail.style.color="red";
            errorMsgEmail.textContent="Email Cannot be Empty"
            //alert("Email");
            return false;
        }
        if( !email.match(mailformat) ){
            //alert("Email");
            errorMsgEmail.style.color="red";
            errorMsgEmail.textContent="Email Ex: test@abc.com"
            return false;
        }

        if(mobile=="" ){
           // alert("Phone number Cannot be empty");
           errorMsgPhone.style.color="red";
           errorMsgPhone.textContent="Phone number Cannot be empty";
            return false;
        }
        if(isNaN(mobile)){
           // alert("Phone Must be Number");
           errorMsgPhone.style.color="red";
           errorMsgPhone.textContent="Phone number Must be Number";
            return false;
        }
        if(mobile.length <= 9  ){
           // alert("Phone number must be 10 digits");
           errorMsgPhone.style.color="red";
           errorMsgPhone.textContent="Phone number must be 10 digits";
           return false;
        }
     let body={firstname,lastname,email,mobile};
     // console.log(body.value); 
       

    
    let createPost= await saveCustomerData(body);

    let {id}=createPost;
    let message=`Data is saved Succesfully with id ${id}`;
    alert(message);
    });

    

    getCustomerData();

    

     
 

     
     //document.write(data,user)
         




