import React, { useState, useEffect, useRef } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'

const getTodoFromLS = () =>{
    const todoLS = localStorage.getItem("allTodoData");
    if(todoLS){
        return JSON.parse(todoLS);
    }else{
        return [];
    }
}
const TodoMain = () => {
    const inputFocus = useRef(null);
    const [inputVal, inputValFunc] = useState("")
    const [addInputVal, addInputValFun] = useState(getTodoFromLS());
    const ItemsAdding = addInputVal.concat(inputVal);

    const inputType = (event) => {
        inputValFunc(event.target.value);
    }

    const addItems = () => {
        if(inputVal.length > 0){
            inputValFunc("");
            addInputValFun(ItemsAdding);
        }
    }

    const keyCheck = (event) => {
        if(event.key === "Enter" && inputVal.length > 0){
            inputValFunc("");
            addInputValFun(ItemsAdding);
        }
    }

    const removeSelectedItems = (targetItems, targetId) => {
        const newTodo = addInputVal.filter((todoNew, todoNewId) =>{
            return todoNewId !== targetId;
        })
        addInputValFun(newTodo);
    }

    localStorage.setItem("allTodoData", JSON.stringify(addInputVal));
    
    useEffect(() => {
        inputFocus.current.focus();
    }, [])
      return(
          <>
            <div className="todo_main">
                <div className="todo_text">Add Your Todo List</div>
                <div className="input_add relative">
                    <input 
                        onChange={inputType}
                        onKeyDown={keyCheck}
                        value={inputVal}
                        ref={inputFocus}
                        type="text" 
                        placeholder="Add New Task" 
                    />

                    <div className="add_btn pointer" 
                        onClick={addItems}>
                        +
                    </div>
                </div>
                {
                    addInputVal.length > 0 ? 
                        <div className="all_todo">
                            <TodoItems 
                                listName={addInputVal}
                                removeItems={removeSelectedItems}>
                            </TodoItems>
                        </div>
                    :false
                }
            </div>

        </>
      )

}

export default TodoMain