import { useState } from "react"

const Todo = () => {

    const [todos, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const submitHandler = ()=>{
        setTodo([...todos, input]);
        setInput('');
    }

    function removeTodo(id) {
    setTodo((prevTodos) => prevTodos.filter((_, i) => i !== id));
    }

    return (
        <div>
            <div>
                <input 
                    type="text"
                    placeholder="New Task"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button onClick={submitHandler}>Submit</button>
            </div>
            <ul>{
                  todos.map((todo, index)=>(
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={()=>removeTodo(index)}>x</button>
                        </li>
                  ))
              }</ul>
        </div>
    )
}
export default Todo