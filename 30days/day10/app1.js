const input = document.querySelector('input')
const btnAdd = document.querySelector('button')
const form = document.querySelector('form')
const ul = document.querySelector('.todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
	todos.forEach((todo) => addTodoElement(todo))
}

function addTodoElement(todo){
    var li = document.createElement('li')
    li.innerHTML = `<span>${todo.text}</span>
                <i class="fa-solid fa-trash"></i>`

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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // let val = input.value.trim()
    // if(val){
    //     addTodoElement({
    //         text: val,
    //     })
    // }
    const text = input.value.trim()
	text != '' ? addTodoElement({ text, completed: false }) : undefined
    input.value=''
})

function saveTodoList(){
    let list = document.querySelectorAll('li')
    let todos = []
    list.forEach((item)=>{
        let text = item.querySelector('span').innerHTML
        let status = item.getAttribute('class')
        todos.push({
            text,
            status
        })
        // todos.push({
		// 	text: item.querySelector('span').innerText,
		// 	completed: item.classList.contains('completed'),
		// })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
