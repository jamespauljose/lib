let email = document.getElementById("exampleInputEmail1");
let pwd = document.getElementById("exampleInputPassword1");
let error = document.getElementById("error");

function validate(){
    if(email.value.trim() =="" || pwd.value.trim() ==""){
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
