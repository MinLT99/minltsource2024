const input = document.querySelector('.content input')
const btnRm = document.querySelector('button')
const content = document.querySelector('.content')
const arrayTag = ['react.js', 'note.js']

document.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        arrayTag.push(input.value.trim())
        input.value= ''
        render()
    }
})

function render(){
    content.innerHTML = ''
    for(let i = 0; i < arrayTag.length; i++){
        const tags = arrayTag[i]
        content.innerHTML += `
                            <li>${tags}
                                <i class="fa-solid fa-xmark hver" onclick="removeTag(${i})"></i>
                            </li>
                            `
    }
    content.appendChild(input)
    input.focus()
}
render()

function removeTag(e){
    arrayTag.splice(e,1)
    render()
}

btnRm.addEventListener('click', function(){
    arrayTag.length = 0
    render()
})
