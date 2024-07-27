import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [headingInput, setHeadinginput] = useState('')
    const [listInputs, setListinputs] = useState({})
    
    const handleAddTodo = () =>{
        if(headingInput.trim() !== null){
            setTodos([...todos, {
                heading:headingInput,
                lists: []
            }])
            setHeadinginput('')
        }
    }
  

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value = {headingInput}
            onChange={(e) => {setHeadinginput(e.target.value)}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map( (todo, idx) => (
            <div key={idx} className='todo-card'>
               <div className="heading_todo">
                <h3>{todo.heading}</h3>
                <button 
                className='delete-button-heading'
                onClick={()=> handleDeleteTodo(idx)}
                > Delete Heading</button>
               </div>
            </div>

        )

        

        )}
      </div>
    </>
  );
};

export default TodoList;
