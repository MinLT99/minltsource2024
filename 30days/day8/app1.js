var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confimPass = document.querySelector('#confimpass')
var form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function isCheckEmpty(listInput){
    let isEmpty = false
    listInput.forEach( input => {
        const trimValue = input.value.trim()
        if(!trimValue){
            isEmpty = true
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });
    return isEmpty
}

function checkLengthError(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be at than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

function chackMatchPassword(password1, password2){
    if(password1.value !== password2.value){
        showError(password2, 'Passwords do not match')
    }
}

function checkEmail(input){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(email, 'Email is not valid')
    }
}

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    if(!isCheckEmpty([username, password, email, confimPass])){
        checkEmail(email)
        checkLengthError(username, 6, 20)
        checkLengthError(password, 8, 25)
        chackMatchPassword(password, confimPass)
    }
})