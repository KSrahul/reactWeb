import React, { useState, useEffect, useRef } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'
import EditTodo from './EditTodoModal';
import ToDoTextFiled from './ToDoTextFiled';

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
    const [toDoDataObject, setToDoObject] = useState(getTodoFromLS());
    const [editeTextField, setEditText] = useState("");
    const [editItemObj, setEditItemObj] = useState("");
    const todoDataObj = () =>{
        setToDoObject(
            [...toDoDataObject,
                {
                    id : new Date().getTime().toString(),
                    listName : inputValue,
                    isDone : false,
                    isRemove : false,
                }
            ]
        )
    }
    const inputOnType = (event) => {
        setInputValue(event.target.value);
    }

    const addItemBtn = () => {
        if(inputValue.length > 0){
            setInputValue("");
            todoDataObj();
        }
    }

    const keyTypeCheck = (event) => {
        if(event.key === "Enter" && inputValue.length > 0){
            setInputValue("");
            todoDataObj();
        }
    }

    const removeSelectedItems = (targetTodoItem) => {
        const restTodoData = toDoDataObject.filter((todoNew) =>{
            return todoNew.id !== targetTodoItem;
        })
        setToDoObject(restTodoData);
    }

    const markAsDone = (itemObj) => {
        const markedReadData = toDoDataObject.filter((markedRead) => {
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

    const saveEditData = () => {
        const editedTodoData = toDoDataObject.filter((editedData) => {
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
            saveEditData();
        }
    }

    const closeEditModal = () =>{
        setEditText("");
        setEditItemObj("");
    }

    localStorage.setItem("allTodoData", JSON.stringify(toDoDataObject));

    useEffect(() => {
        inputFocus.current.focus();
    }, [])

      return(
          <>
            <div className="todo_main">
                <div className="todo_text">Add Your Todo List</div>
                
                <ToDoTextFiled
                    inputType={inputOnType}
                    inputValue={inputValue}
                    keyCheck={keyTypeCheck}
                    inputFocus={inputFocus}
                    addItems={addItemBtn}>
                </ToDoTextFiled>

                {
                    toDoDataObject.length > 0 ? 
                        <div className="all_todo">
                            <TodoItems 
                                allTodoList={toDoDataObject}
                                removeItems={removeSelectedItems}
                                markRead={markAsDone}
                                editItems={editTodoItems}>
                            </TodoItems>
                            
                            <div className="clear_items pointer" 
                                onClick={
                                    () => setToDoObject([])
                                }>
                                Clear Items
                            </div>
                        </div>
                    :false
                }

                {
                    editeTextField.length > 0 ?
                        <EditTodo
                            removeEditText={closeEditModal}
                            editTodoValue={newEditValue}
                            textareaEnter={textareaEnterPress}
                            editeTodoField={editeTextField}
                            saveEditValue={saveEditData}>
                        </EditTodo>
                    :false
                }
            </div>

        </>
      )

}

export default TodoMain