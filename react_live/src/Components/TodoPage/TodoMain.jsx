import React, { useState, useEffect, useRef } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'
import EditTodo from './EditTodoModal';
import ToDoTextFiled from './ToDoTextFiled';
import noItems from './Items_loader.png'

const getTodoFromLS = () =>{
    const todoLS = localStorage.getItem("allTodoData");
    if(todoLS){
        return JSON.parse(todoLS);
    }else{
        return [];
    }
}
const TodoMain = () => {
    const inputFocus = useRef(false);
    const [toDoDataObject, setToDoObject] = useState(getTodoFromLS());
    // const [inputValue, setInputValue] = useState("");
    // const [editeTextField, setEditText] = useState("");
    // const [editItemObj, setEditItemObj] = useState("");
    const [allState, setAllState] = useState(
        {
            inputValue: "",
            editeTextField: "",
            editItemObj: "",
            findTopPosition : ""
        }
    )

    const todoDataObj = () =>{
        setToDoObject(
            [
                {
                    id : new Date().getTime().toString(),
                    listName : allState.inputValue,
                    isDone : false,
                    isRemove : false,
                },
                ...toDoDataObject
            ]
        )
    }

    const itemsCount = toDoDataObject.filter((allItemsCount) =>{
        return !allItemsCount.isDone;
    })

    const inputOnType = (event) => {
        const currentVal = event.target.value;
            setAllState(allKeys => ({
            ...allKeys,
            inputValue : currentVal,
        }))
    }

    const addItemBtn = () => {
        if(allState.inputValue.length > 0){
            todoDataObj();
            allState.inputValue = "";
        }
    }

    const keyTypeCheck = (event) => {
        if(event.key === "Enter" && allState.inputValue.length > 0){
            todoDataObj();
            allState.inputValue = "";
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

    const editTodoItems = (editObj, targetElement) => {
        const editPosition = targetElement.currentTarget.getBoundingClientRect();
        setAllState(allKeys => ({
            ...allKeys,
            editeTextField : editObj.listName,
            editItemObj : editObj,
            findTopPosition: editPosition.top
        }))
    }

    const newEditValue = (event) => {
        if (event.target.value.length > 0) {
            setAllState(allKeys => ({
                ...allKeys,
                editeTextField : event.target.value,
                editItemObj : allState.editItemObj,
            }))
        }
    }

    const saveEditData = () => {
        const editedTodoData = toDoDataObject.filter((editedData) => {
            if (editedData.id === allState.editItemObj.id) {
                editedData.listName = allState.editeTextField;
            }
            return editedData;
        })
        setToDoObject(editedTodoData);
        allState.editeTextField = "";
    }

    const textareaEnterPress = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            saveEditData();
        }
    }

    const closeEditModal = () =>{
        setAllState(allKeys => ({
            ...allKeys,
            editeTextField : "",
        }))
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
                    textAreaVal={allState.inputValue}
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
                        </div>
                    :
                    <div class="no_todo">Your todo will appear here</div>
                }

                {
                    allState.editeTextField.length > 0 ?
                        <EditTodo
                            removeEditText={closeEditModal}
                            editTodoValue={newEditValue}
                            textareaEnter={textareaEnterPress}
                            editeTodoField={allState.editeTextField}
                            saveEditValue={saveEditData}
                            topPosition={allState.findTopPosition}>
                        </EditTodo>
                    :false
                }
                {
                    toDoDataObject.length > 0 ?
                        <div className="cta_action flex">
                            <div className="pending_task">
                                {itemsCount.length} items left
                            </div>
                            <div className="clear_items pointer" 
                                onClick={() => {
                                    const confirmRemove = window.confirm("Are You Sure?");
                                    if(confirmRemove){
                                        setToDoObject([]);
                                    }
                                }}>
                                Clear Items
                            </div>
                        </div>
                    :false
                }
            </div>

        </>
      )

}

export default TodoMain