var boxAlert = document.querySelector('.box_alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')


var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')


document.addEventListener('keydown', e => {

    let keyName = e.keyCode === 32 ? 'space' : e.key
    document.querySelector('.result').innerText = e.code

    eKey.innerText = keyName
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code

    boxAlert.classList.add('hide')
    box.classList.remove('hide')
})