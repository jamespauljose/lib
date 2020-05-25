let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");

function validate(){
    if(email.value.trim() ==""){
        alert("Field cannot be empty");
        return false;
    }
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/

    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red"
        return false;
    }
}

let phno = document.getElementById("exampleInputPhoneno1");
let error1 = document.getElementById("error1");


function phoneNo(){
    let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexp.test(phno.value)){
        error1.innerHTML = "valid";
        error1.style.color ="green";
        return true;
    }
    else{
        // alert("Invalid");
        error1.innerHTML = "Invalid";
        error1.style.color ="red"
        return false;
    }
}

let pwd = document.getElementById("exampleInputPassword1");
let error2 = document.getElementById("error2");

function pswd(){
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regexp.test(pwd.value)){
        error2.innerHTML = "Valid";
        error2.style.color = "green";
        return true;
    }
    else{
        error2.innerHTML = "Minimum 8 characters, at least one uppercase and one lower case, must contain at least one number";
        error2.style.color = "red";
        return false;
    }

}
let pword=document.getElementById("exampleInputPassword1");
let cpword=document.getElementById("exampleInputPassword2");
let x=document.getElementById("exampleInputPassword1");
let strength=document.getElementById("strength");
let match=document.getElementById("match");


function check(){
    if((x.value.length>=1)&&(x.value.length<8)){
        strength.innerHTML=" Weak";
        strength.style.color="red";
    }
    else if((x.value.length>=8)&&(x.value.length<12)){
        strength.innerHTML="Medium";
        strength.style.color="yellow";
    }
    else if (x.value.length>12){
        strength.innerHTML="Strong";
        strength.style.color="green";
    }
    else if (x.value.length<1){
        strength.innerHTML="";
    }
}
    
function ccheck(){
    if(exampleInputPassword2.value!=exampleInputPassword1.value){
        match.innerHTML="Passwords does't match";
        match.style.color="red";
        return false;
    }
    else if(exampleInputPassword2.value.length<1){
        match.innerHTML="";
    }
    else if(exampleInputPassword2.value==exampleInputPassword1.value)
    {
        match.innerHTML="Password matches"
        match.style.color="green";
        return true;
    }
}


         