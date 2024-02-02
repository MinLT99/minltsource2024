var btnSearch = document.querySelector('.btn_search')

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling?.focus();
})