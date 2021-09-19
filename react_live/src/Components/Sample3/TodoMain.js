import React, { useState } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'
const TodoMain = () => {
    const [inputVal, inputValFunc] = useState("")
    const [addInputVal, addInputValFun] = useState([])
    const inputType = (event) => {
        inputValFunc(event.target.value)
    }
    const addItems = () => {
        // inputValFunc("");
        // addInputVal.push(inputVal);

        if(inputVal.length > 0){
            inputValFunc("");
            addInputValFun(addInputVal.concat(inputVal))
        }
    }
      return(
          <>
            <div className="todo_main">
                <div className="todo_text">TO DO LIST</div>
                <div className="input_add relative">
                    <input onChange={inputType} value={inputVal} type="text" placeholder="Add New Task" />
                    <div className="add_btn" onClick={addItems}>+</div>
                </div>
                {
                    addInputVal.length > 0 ? 
                        <div className="all_todo">
                            <TodoItems listName={addInputVal}></TodoItems>
                        </div>
                    :false
                }
            </div>

        </>
      )

}

export default TodoMain