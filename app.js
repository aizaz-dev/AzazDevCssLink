const name = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

console.log(name, password, confirmPassword, email, phone);

const userCheck = /^[A-Za-z. ]{3,30}$/;
const passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const emailCheck=/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
const mobileCheck=/^[789][0-9]{9}$/


function validate(){
    if(userCheck.test(name.value)){
        alert("valid")
    }
    else{
        alert("invalid")
    }
}