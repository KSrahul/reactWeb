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
    const [toDoObject, setToDoObject] = useState(getTodoFromLS());
    const [getEditText, setEditText] = useState("");
    const todoDataObj = () =>{
        setToDoObject(
            [...toDoObject,
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
        const restTodoData = toDoObject.filter((todoNew) =>{
            return todoNew.id !== targetTodoItem;
        })
        setToDoObject(restTodoData);
    }

    const markAsDone = (itemObj) => {
        const markedReadData = toDoObject.filter((markedRead) => {
            if(markedRead.id === itemObj.id){
                markedRead.isDone === false ? 
                markedRead.isDone = true : 
                markedRead.isDone = false;
            }
            return markedRead;
        })

        setToDoObject(markedReadData);
    }

    const editTodoItems = (editObj) => {
        const editField = prompt("Edit", editObj.listName);
        if(editField !== null){
            const editedData = toDoObject.filter((edited) => {
                if(edited.id === editObj.id){
                    editObj.listName = editField;
                }
                return edited;
            })
            setToDoObject(editedData);
        }
    }

    localStorage.setItem("allTodoData", JSON.stringify(toDoObject));
    
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
                    toDoObject.length > 0 ? 
                        <div className="all_todo">
                            <TodoItems 
                                allTodoList={toDoObject}
                                removeItems={removeSelectedItems}
                                markRead={markAsDone}
                                editItems={editTodoItems}>
                            </TodoItems>
                            <div className="clear_items pointer" onClick={() => setToDoObject([])}>Clear Items</div>
                        </div>
                    :false
                }
            </div>

        </>
      )

}

export default TodoMain