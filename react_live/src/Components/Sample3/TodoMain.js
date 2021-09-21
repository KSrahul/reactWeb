import React, { useState, useEffect, useRef } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'
import EditTodo from './EditTodo';

const getTodoFromLS = () =>{
    const todoLS = localStorage.getItem("allTodoData");
    if(todoLS){
        return JSON.parse(todoLS);
    }else{
        return [];
    }
}
const TodoMain = () => {
    const inputFocus = useRef([]);
    const [inputValue, setInputValue] = useState("");
    const [toDoObject, setToDoObject] = useState(getTodoFromLS());
    const [editeTextField, setEditText] = useState("");
    const [editItemObj, setEditItemObj] = useState("");
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
        setEditText(editObj.listName);
        setEditItemObj(editObj);
    }

    const newEditValue = (event) => {
        if (event.target.value || event.key === "Enter") {
            setEditText(event.target.value)
        }
    }

    const saveEditValues = () => {
        const editedTodoData = toDoObject.filter((editedData) => {
            if (editedData.id === editItemObj.id) {                
                editedData.listName = editeTextField;
            }
            return editedData;
        })
        setToDoObject(editedTodoData);
        setEditText("");
    }

    const textareaEnterPress = (event) => {
        if (event.key === "Enter") {
            saveEditValues();
        }
    }

    const closeEditModal = () =>{
        setEditText("");
        setEditItemObj("");
    }
    localStorage.setItem("allTodoData", JSON.stringify(toDoObject));

    useEffect(() => {
        inputFocus.current.focus();
    }, [])

      return(
          <>
            <div className="todo_main">
                <div className="todo_text">Add Your Todo List</div>
                {
                    editeTextField.length > 0 ?
                        <EditTodo
                            removeEditText={closeEditModal}
                            editTodoValue={newEditValue}
                            textareaEnter={textareaEnterPress}
                            editeTodoField={editeTextField}
                            saveEditValue={saveEditValues}>
                        </EditTodo>
                    :false
                }
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