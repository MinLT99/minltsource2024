import React, { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import "./../css/todolist.css";

function Todo(props) {
    const localSto = JSON.parse(localStorage.getItem('jobs'))

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(localSto ?? [])
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState('')

    const handleAdd = () => {
        const trimmedJob = job.trim();
        if (trimmedJob) {

            setJobs(pre => {
                const newTodo = [...pre, trimmedJob]

                const saveLc = JSON.stringify(newTodo)
                localStorage.setItem('jobs', saveLc)

                return newTodo
            })
            setJob('')
        }
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

    const handClose = () => {
        setEditIndex(null);
        setEditText('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text"
                className='inputText'
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button className='btn-add' onClick={handleAdd}>Add todo</button>
            <ul>
                {jobs.map((todo, i) => (
                    <li key={i}>
                        {editIndex === i ? (
                            <>
                                <input className='inp-edit'
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button className='btn-save' onClick={() => handleEdit(i)}>Save</button>
                                <button className='btn-close' onClick={() => handClose(i)}>Close</button>
                            </>
                        ) : (
                            <>
                                <span className='todo-list'>{todo}</span>
                                <button className='btn-edit' onClick={() => handleIndex(todo, i)}>Edit</button>
                                <button className='btn-del' onClick={() => handleDelete(i)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
