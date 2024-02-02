var process = document.querySelector('.process')
var range = document.querySelector('.range')
var value = document.querySelector('.process span')

function updateProcess(percent){
    process.style.width = `${percent}%`
    
    value.innerHTML = `${percent}%`

}

range.addEventListener('mousemove', function(e){
    var processWith = e.pageX - this.offsetLeft
    var percent = processWith / this.offsetWidth * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess(30)