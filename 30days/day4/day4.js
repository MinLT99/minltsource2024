var image = document.querySelectorAll('.gre_img img')
var next = document.querySelector('.next')
var prev = document.querySelector('.prev')
var close = document.querySelector('.modal_close')
var greImg = document.querySelector('.modal_img img')
var modal = document.querySelector('.modal')

var  currentIndex = 0;

function showGallary(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }

    if(currentIndex == image.length - 1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }

    greImg.src = image[currentIndex].src
    modal.classList.add('show')
}

image.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index
        showGallary()
    })
})

close.addEventListener('click', function(){
    modal.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        modal.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallary()
    }
})

next.addEventListener('click', function(){
    if(currentIndex < image.length - 1){
        currentIndex++
        showGallary()
    }
})

