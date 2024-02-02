//cách số 1******************************************************************************************************
// var btnS = document.querySelector('.success')
// var btnW = document.querySelector('.warning')
// var btnE = document.querySelector('.error')

// btnS.addEventListener('click', e =>{
//     e.preventDefault()
//     createToast('success')
// })
// btnW.addEventListener('click', e =>{
//     e.preventDefault()
//     createToast('warning')
// })
// btnE.addEventListener('click', e =>{
//     e.preventDefault()
//     createToast('error')
// })

// function createToast(status){
//     switch (status) {
//         case 'success': var template = `<i class="fa-solid fa-circle-check"></i>
//                         <span>This is a success message!</span>`
//             break;
//         case 'warning': var template = `<i class="fa-solid fa-circle-check"></i>
//                         <span>This is a warning message!</span>`
//             break;
//         case 'error': var template = `<i class="fa-solid fa-circle-check"></i>
//                         <span>This is a error message!</span>`
//             break;
    
//         default:
//             break;
//     }

//     const div = document.createElement('div')
//     div.classList.add('toast')
//     div.classList.add(status)
//     div.innerHTML = `${template}
//                     <span class="countdown"></span>
//                     `;
//     var listToast = document.getElementById('toast')
//     listToast.appendChild(div)

//     setTimeout(function() {
//         div.style.animation = 'slide_hide 2s ease forwards';
//     },4000)
//     setTimeout(function(){
//         div.remove()
//     }, 6000)
// }


//cách số 2******************************************************************************************************
// const btnStatus = document.querySelectorAll('button')
// btnStatus.forEach( (btn) => {
//     btn.addEventListener('click', function(e){
//         createToast(e.target.getAttribute('class'))
//     })
// });

// function createToast(status){
//     const div = document.createElement('div')
//     div.className = (`toast ${status}`)
//     switch (status) {
//         case 'success': template = `<i class="fa-solid fa-circle-check"></i>
//                         <span>This is a success message!</span>
//                         <span class="countdown"></span>`
//             break;
//         case 'warning': template = `<i class="fa-solid fa-circle-check"></i>
//                         <span>This is a warning message!</span>
//                         <span class="countdown"></span>`
//             break;
//         case 'error': template = `<i class="fa-solid fa-circle-check"></i>
//                         <span>This is a error message!</span>
//                         <span class="countdown"></span>`
//             break;
//         default:
//             break;
//     }

//     div.innerHTML = ` ${template}`
//     const divParent = document.getElementById('toast')
//     divParent.appendChild(div)

//     setTimeout(() => {
//         div.style.animation =  'slide_hide 2s ease forwards'
//     }, 3000);
//     setTimeout(() => {
//         div.remove()
//     }, 5000);
// }

//cách số 3******************************************************************************************************
const btnStatus = document.querySelectorAll('button')
btnStatus.forEach( (btn) => {
    btn.addEventListener('click', function(e){
        createToast(e.target.getAttribute('class'))
    })
})

const arrayToast = {
    success: {
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg: '<span>This is a success message!</span>'
    },
    warning: {
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg: '<span>This is a warning message!</span>'
    },
    error: {
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg: '<span>This is a error message!</span>'
    }
}

function createToast(status){
    const div = document.createElement('div')
    div.className = `toast ${status}`
    div.innerHTML = `${arrayToast[status].icon}
                    ${arrayToast[status].msg}
                    <span class="countdown"></span>`
    document.getElementById('toast').appendChild(div)

    setTimeout(() => {
        div.style.animation = 'slide_hide 2s ease forwards'
    }, 3000);
    setTimeout(() => {
        div.remove()
    }, 5000);
}