const input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('.todos')

const getTodos = localStorage.getItem('todos')
const getArray = JSON.parse(getTodos)

if(getArray){
    getArray.forEach((todo)=>addTodoElement(todo))
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const text = input.value.trim()
    text != '' ? addTodoElement({ text, completed: false }) : undefined
    input.value = ''

})

function addTodoElement(todo){
    const li = document.createElement('li')
    li.innerHTML = `
                    <span>${todo.text}</span>
                    <i class="fas fa-trash"></i>
                    `
    if(todo.status === 'completed'){
        li.setAttribute('class', 'completed')
    }

    li.addEventListener('click', function(){
        this.classList.toggle('completed')
        saveTodoList()
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
        saveTodoList()
    })

    ul.appendChild(li)
    saveTodoList()
}

function saveTodoList(){
    const list = document.querySelectorAll('li')
    const todo = []

    list.forEach((index)=>{
        const text = index.querySelector('span').innerHTML
        const status = index.classList.contains('completed') ? 'completed' : 'underfind'

        todo.push({text, status})
    })
    const jsonTodo = JSON.stringify(todo)
    localStorage.setItem('todos', jsonTodo)

}