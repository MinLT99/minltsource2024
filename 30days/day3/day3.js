var btnOpen = document.querySelector('.modal_open_btn')
var modalForm = document.querySelector('.modal_form')
var btnX = document.querySelector('.modal_close')
var btnClose = document.querySelector('.modal_footer button')

function toggleModal(){
    modalForm.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnX.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)

modalForm.addEventListener('click', function(e){
    if (e.target == e.currentTarget){
        toggleModal()
    }
})