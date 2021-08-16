const lrForm = document.querySelectorAll('.lr-form')
const tabs = document.querySelectorAll(".lr-header__button"); 
const login = document.querySelectorAll(".lr-container__login")
const register = document.querySelectorAll(".lr-container__register")
const all = document.querySelectorAll(".lr-wrap")
const alertDOM = document.querySelectorAll('.alert')
const eyes = document.querySelectorAll(".lr-container__eye")
const register__name = document.querySelector('.registername')
const register__surname = document.querySelector('.register__surname')
const register__mail = document.querySelector(".registermail")
const phone = document.querySelector(".registerphone")
const register__checkpassword = document.querySelector('.register__password')
const register__matchpassword = document.querySelector('.checkregister__password')
const register__button = document.querySelector('.register__btn')
const register__check = document.querySelector('.register__checkbox')

const alertFunction = (message, className="lr-container__error") => ` <p class="${className}"> ${message} </p> `

const user__mail = document.querySelector('.usermail')
const user__password = document.querySelector('.userpassword')


lrForm[0].addEventListener('submit', loginformHandler)
function loginformHandler(event){
    event.preventDefault()

    checkEmail(user__mail);
    checkLength(user__password, 8, 12);
    checkPassword(user__password)
    
}

function checkEmail(event) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (event.value=="") {
        alertDOM[0].innerHTML = alertFunction("Bu alan boş bırakılamaz!")
        event.classList.add("lr-container__input--c");
    }

    else if(re.test(event.value)) {
        console.log("Mail Başarılı")
        event.classList.remove("lr-container__input--c");
        alertDOM[0].innerHTML = ""
    }
     
    else{
        event.classList.add("lr-container__input--c");
        alertDOM[0].innerHTML = alertFunction("Mail adresini doğru formatta giriniz!")
    }
}

function checkPassword(event){
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
    
    if (user__password.value=="") {
        alertDOM[1].innerHTML = alertFunction("Bu alan boş bırakılamaz!")
        user__password.classList.add("lr-container__input--c");
    }
    else if(re.test(event.value)) {
        console.log("Password Başarılı")
        event.classList.remove("lr-container__input--c");
        alertDOM[1].innerHTML = ""
    }

    else  {
        alertDOM[1].innerHTML = alertFunction("En az sekiz ve en fazla 12 karakter, en az bir büyük harf, bir küçük harf, bir sayı içermelidir!")
    }
    
}
function checkLength(event, min, max) {
 
    if(event.value.length < min) {
        alertDOM[1].innerHTML = alertFunction(`${event.name} en az ${min} karakterli olmalıdır!`);
        
    }
    else if(event.value.length > max) {
        alertDOM[1].innerHTML = alertFunction(`${event.name} en fazla ${max} karakterli olmalıdır!`);
     
        
    }
    else{
        alertDOM[1].innerHTML = ""
        console.log("length başarılı")
    }
}




lrForm[1].addEventListener('change', registerformHandler)


function registerformHandler(event){
    event.preventDefault()
    registercheckEmail(register__mail);
    checknameLength(register__name, 3, 24);
    checknameLength(register__surname, 3, 24);
    checkPhoneNumber(phone);
    registercheckPassword(register__checkpassword);
    registercheckPassword(register__matchpassword);
    matchPassword(register__checkpassword,register__matchpassword);
   
}
   

function registercheckEmail(event) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (event.value=="") {
        alertDOM[3].innerHTML = alertFunction("Bu alan boş bırakılamaz!")
        event.classList.add("lr-container__input--c");
    }

    else if(re.test(event.value)) {
        console.log("Mail Başarılı")
        event.classList.remove("lr-container__input--c");
        alertDOM[3].innerHTML = ""
    }
     
    else{
        event.classList.add("lr-container__input--c");
        alertDOM[3].innerHTML = alertFunction("Mail adresini doğru formatta giriniz!")
       
       
    }
    
}

function checknameLength(event, min, max) {
 
    if(event.value.length < min) {
        alertDOM[2].innerHTML = alertFunction(`${event.name} en az ${min} karakterli olmalıdır!`);
        event.classList.add("lr-container__input--c");
        
    }
    else if(event.value.length > max) {
        alertDOM[2].innerHTML = alertFunction(`${event.name} en fazla ${max} karakterli olmalıdır!`);
        event.classList.add("lr-container__input--c");
        
    }
    else{
       // console.log("length başarılı")
        event.classList.remove("lr-container__input--c");
        alertDOM[2].innerHTML = ""
    }
}

function checkPhoneNumber(event) {
    var exp = /^\d{10}$/; 
    if(exp.test(event.value)){
        alertDOM[4].innerHTML = "";
        console.log("phonebaşarılı");
        event.classList.remove("lr-container__input--c");
    } 
        
        
    else{
        user__password.classList.add("lr-container__input--c");
        alertDOM[4].innerHTML = alertFunction("Telefon numarası, 10 haneli olmalıdır!") 
    }    
}

function registercheckPassword(event){
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
    
    if (user__password.value=="") {
        
        user__password.classList.add("lr-container__input--c");
        alertDOM[5].innerHTML = alertFunction("Bu alan boş bırakılamaz!")
        alertDOM[6].innerHTML = alertFunction("Bu alan boş bırakılamaz!")
    }
    else if(re.test(event.value)) {
        console.log("register Password Başarılı")
        event.classList.remove("lr-container__input--c");
        alertDOM[5].innerHTML = ""
        alertDOM[6].innerHTML = ""
    }

    else  {
        alertDOM[5].innerHTML = alertFunction("En az sekiz ve en fazla 12 karakter, en az bir büyük harf, bir küçük harf, bir sayı içermelidir!")
        alertDOM[6].innerHTML = alertFunction("En az sekiz ve en fazla 12 karakter, en az bir büyük harf, bir küçük harf, bir sayı içermelidir!")
    }
    
}

function unmask(event) {
    //console.log(event)
    if (event.type === "password") {
      event.type = "text";
    } else {
      event.type = "password";
    }
   
}
function maskeyes(){
    eyes.forEach((eye)=>{
        eye.addEventListener("click",()=>{
            unmask(user__password)
            unmask(register__checkpassword)
            unmask(register__matchpassword)
        })
    })
}

maskeyes() 

function matchPassword(event1, event2) {
    if(event1.value !== event2.value) {
        alertDOM[6].innerHTML = alertFunction("Parolalar birbiriyle eşleşmiyor!")
    }
    else{
        
        alertDOM[6].innerHTML = ""
    }
}

//register__check.addEventListener('checked', registercheckbox)

register__check.addEventListener('change', function() {
    if (this.checked == true) {
        register__button.removeAttribute('disabled');
    } else {
        register__button.disabled = "false";
    }
  });


function tab() {
    tabs.forEach((tab)=>{
        tab.addEventListener("click", ()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        

       all.forEach((item)=> {
            item.style.display ="none";
        })

        let tabval = tab.getAttribute("data-tabs");
        if(tabval == "login") {
            login.forEach((e)=>{
                e.style.display = "block";
            }) 
        }
        else if(tabval == "register") {
            register.forEach((e)=>{
                e.style.display = "block";
            }) 
        }
        else{
            all.forEach((item)=>{
                item.style.display = "block";
            }) 
        }
       
    })
})
}
tab()

