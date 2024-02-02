var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confimPass = document.querySelector('#confimpass')
var form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    parent.classList.add('error')
    small.innerHTML = message
}

function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    parent.classList.add('success')
    small.innerHTML = ''
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkEmpty(listInput){
    let isEmpty = false
    listInput.forEach(input => {
        if(input.value == ''){
            isEmpty = true
            showError(input, `${getFieldName(input)} chua nhap`)
        }else{
            showSuccess(input)
        }
    });
    return isEmpty
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} phai dai hon ${min} ki tu`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} phai ngan hon${max} ki tu`)
    }else{
        showSuccess(input)
    }
}

function checkPass2(pass1, pass2){
    if(pass1.value != pass2.value){
        showError(pass2, 'khong khop')
    }
}

function checkEmail(input){
    const rex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!rex.test(input.value.trim())){
        showError(input, 'email khong hop le')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!checkEmpty([username, email, password, confimPass])){
        
        checkLength(username, 6, 15)
        checkLength(password, 8, 25)
        checkPass2(password, confimPass)
        checkEmail(email)
    }
})
















// //show error
// function showError(input, message){
//     let parent = input.parentElement;
//     let small = parent.querySelector('small')
//     parent.classList.remove('success')
//     parent.classList.add('error')
//     small.innerText = message
// }

// //remove error
// function showSuccess(input){
//     let parent = input.parentElement;
//     let small = parent.querySelector('small')
//     parent.classList.remove('error')
//     parent.classList.add('success')
//     small.innerText = ''
// }

// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1)
// }

// //kiem tra nguoi dung co nhap chua
// function isCheckEmpty(listInput){
//     let isEmpty = false
//     listInput.forEach(input => {
//         const trimValue = input.value.trim()
//         if(!trimValue){
//             isEmpty = true
//             showError(input, `${getFieldName(input)} is required`)
//         }else{
//             showSuccess(input)
//         }
//     });
//     return isEmpty
// }

// //kiem tra do dai
// function checkLengthError(input, min, max){
//     if(input.value.length < min){
//         showError(input, `${getFieldName(input)} must be at least ${min} characters`)
//     }
//     else if(input.value.length > max){
//         showError(input, `${getFieldName(input)} must be at than ${max} characters`)
//     }
//     else{
//         showSuccess(input)
//     }
// }

// //check email
// function checkEmail(input){
//     const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if(!regexEmail.test(input.value)){
//         showError(input, 'email khong hop le')
//     }
//     else{
//         showSuccess(input)
//     }
// }

// //check 2 pass
// function checkConfimPass(pass1, pass2){
//     if(pass1.value != pass2.value){
//         showError(pass2, 'Passwords do not match')
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     if(!isCheckEmpty([username, password, email, confimPass])){
//         checkLengthError(username, 4, 15)
//         checkLengthError(password, 8, 20)

//         checkEmail(email)
//         checkConfimPass(password, confimPass)
//     }
// })