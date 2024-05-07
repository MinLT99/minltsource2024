import React, { useState } from 'react';

Todo.propTypes = {

};

function Todo(props) {
    const localSto = JSON.parse(localStorage.getItem('jobs'))

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(localSto ?? [])
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState('')

    const handleAdd = () => {
        setJobs(pre => {
            const newTodo = [...pre, job]

            const saveLc = JSON.stringify(newTodo)
            localStorage.setItem('jobs', saveLc)

            return newTodo
        })
        setJob('')
    }

    const handleDelete = (i) => {
        setJobs(pre => {
            const newTodoList1 = [...pre]
            newTodoList1.splice(i, 1)

            const saveLc = JSON.stringify(newTodoList1)
            localStorage.setItem('jobs', saveLc)

            return newTodoList1
        })
        setEditIndex(null)
    }

    const handleIndex = (todo, i) => {
        setEditIndex(i)
        setEditText(todo)
    }

    const handleEdit = (index) => {
        const editJob = JSON.parse(localStorage.getItem('jobs')) || [];
        const newList = [...editJob];
        newList[index] = editText
        localStorage.setItem('jobs', JSON.stringify(newList));
        setJobs(newList)
        setEditIndex(null)
        setEditText('')

    }

    return (
        <div>
            <input type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleAdd}>Add todo</button>
            <ul>
                {jobs.map((todo, i) => (
                    <li key={i}>
                        {editIndex === i ? (
                            <>
                                <input type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleEdit(i)}>Save  </button>
                            </>
                        ) : (
                            <>
                                <span>{todo}</span>
                                <button onClick={() => handleIndex(todo, i)}>Edit</button>
                            </>
                        )}
                        <button onClick={() => handleDelete(i)}>X</button>
                    </li>
                ))}
            </ul>
            <div>

            </div>
        </div>
    );
}

export default Todo;