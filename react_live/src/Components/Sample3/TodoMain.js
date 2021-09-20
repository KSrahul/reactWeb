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
    const [inputValue, setInputValue] = useState("");
    const [addInputValue, setValueInput] = useState(getTodoFromLS());
    const todoDataObj = () =>{
        setValueInput(
            [...addInputValue,
                {
                    id : new Date().getTime().toString(),
                    listName : inputValue,
                    isDone : false,
                    isRemove : false,
                }
            ]
        )
    }
    const inputType = (event) => {
        setInputValue(event.target.value);
    }

    const addItems = () => {
        if(inputValue.length > 0){
            setInputValue("");
            todoDataObj();
        }
    }

    const keyCheck = (event) => {
        if(event.key === "Enter" && inputValue.length > 0){
            setInputValue("");
            todoDataObj();
        }
    }

    const removeSelectedItems = (targetTodoItem) => {
        const restTodoData = addInputValue.filter((todoNew) =>{
            return todoNew.id !== targetTodoItem;
        })
        setValueInput(restTodoData);
    }

    const markAsDone = (itemObj) => {
        const markedReadData = addInputValue.filter((markedRead) => {
            if(markedRead.id === itemObj.id){
                markedRead.isDone === false ? 
                markedRead.isDone = true : 
                markedRead.isDone = false;
            }
            return markedRead;
        })

        setValueInput(markedReadData);
    }

    localStorage.setItem("allTodoData", JSON.stringify(addInputValue));
    
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
                        value={inputValue}
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
                    addInputValue.length > 0 ? 
                        <div className="all_todo">
                            <TodoItems 
                                allTodoList={addInputValue}
                                removeItems={removeSelectedItems}
                                markRead={markAsDone}>
                            </TodoItems>
                        </div>
                    :false
                }
            </div>

        </>
      )

}

export default TodoMain