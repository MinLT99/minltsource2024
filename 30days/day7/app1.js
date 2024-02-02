var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.remove')
var tags = ['NoteJS', 'ReactJS']

function render(){
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `
                <li>${tag}
                    <i class="fa-solid fa-xmark hver" onclick="removeTag(${i})"></i>
                </li>
        `        
    }
    content.appendChild(input)
    input.focus()
}

render()

function removeTag(e){
    tags.splice(e,1)
    render()
}

document.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})

removeAll.addEventListener('click', function(){
    tags = []
    render()
})