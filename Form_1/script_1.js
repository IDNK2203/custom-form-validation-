
let inputs = document.querySelectorAll("p > input")
let form = document.querySelector("form")
let msg_box = document.querySelector(".error")
let password = document.querySelector("#password")
let password_check = document.querySelector("#pw_check")

console.log(inputs , msg_box ,form ,password,password_check)

// show error function

function show_error(field){
    if(field.validity.valueMissing){
        msg_box.textContent =`The field ${field.name} hasn't been filled yet`
    }
    else if(field.validity.tooShort){
        msg_box.textContent = `The feild ${field.name} should have at least ${field.minLength} characters; you have entered ${field.value.length}`
    }
    else if(field.validity.typeMismatch){
        msg_box.textContent =`The value entered in this field needs to be a ${field.type}`
    }
    else if(field.validity.patternMismatch){
        msg_box.textContent = "the set password value is not consistent with check password value";
    }
    msg_box.style.display = "block"
}

// input event handler

for(let i = 0 ; i < inputs.length ; i++){
    inputs[i].addEventListener("input" , function(){
        if(!this.validity.valid){
            show_error(this)
        }
        else{
            msg_box.style.display = "none"
            inputs[i].classList.remove("highlight")
        }
    })
}

// password event handler
password.addEventListener("input" , ()=>{
password_check.pattern = password.value ;
})
// on submit event handler

form.addEventListener("submit" , function(e){    
    for(let i = 0 ; i < inputs.length ; i++){
        if(!inputs[i].validity.valid){
            show_error(inputs[i])
            e.preventDefault()
            inputs[i].classList.add("highlight")
        }

    }  
})
