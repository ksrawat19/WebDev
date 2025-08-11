import React, { useState } from 'react'

const TodoList = () => {

    const [todo, setTodo] = useState([]);
    const [newTask, setNewTask] = useState("");

    const changeHandler = (event)=>{
        setNewTask(event.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if (newTask.trim() === "") return;
        setTodo([...todo, newTask]);
        setNewTask("");
    }

    return (
        <div>
            <h1>Todo List!</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={newTask} placeholder='write new todo' onChange={changeHandler}/>
                <button type='submit'>Add task</button>
            </form>

            <ol style={{fontSize: "2rem"}}>{
                    todo.map((list)=>(
                        <li key={Math.random()}>{list}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default TodoList