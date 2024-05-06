import React, { useState } from 'react';

Todo.propTypes = {

};

const todoList = [
    "Job 1",
    "Job 2",
    "Job 3"
]

function Todo(props) {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(todoList)
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState('')

    const handleAdd = () => {
        const newTodoList = [...jobs, job]
        setJobs(newTodoList)
        setJob('')
    }

    const handleDelete = (i) => {
        const newTodoList1 = [...jobs]
        newTodoList1.splice(i, 1)
        setJobs(newTodoList1)
        setEditIndex(null)
    }

    const handleIndex = (todo, i) => {
        setEditIndex(i)
        setEditText(todo)
    }
    
    const handleEdit = (index) => {
        const newList = [...jobs]
        newList[index] = editText
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
        </div>
    );
}

export default Todo;