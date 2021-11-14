let form = document.querySelector('#form');
let user = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2');

form.addEventListener('submit' , function(event){
    event.preventDefault();
    checkInputs();
})

let checkInputs = function(){
    let userValue = user.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim(); 

    if(userValue === ''){
        setErr( user , 'نام کاربری را وارد کنید!')
    }else{
        setSuccess(user)
    }

    if(emailValue === ''){
        setErr(email , 'ایمیل خود را وارد کنید!')
    }else{
        setSuccess(email)
    }
    if(passwordValue === ''){
        setErr(password , 'رمز عبور خود را وارد کنید!')
    }else{
        setSuccess(password)
    }
    if(password2Value === ''){
        setErr(password2 , 'رمز عبور خود را تکرار کنید!')
    }else if(passwordValue !== password2Value){
        setErr(password2 , 'تائیدیه رمز عبور اشتباه است!')
    }else{
        setSuccess(password2)
    }
}
let setErr = function(input , message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    formControl.className = 'form-controll err';
    small.innerText=message;
}
let setSuccess = function(input){
    let formControl = input.parentElement;
    formControl.className = 'form-controll success'
}