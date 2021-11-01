import React, { useState, useEffect, useRef } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'
import EditTodo from './EditTodoModal';
import ToDoTextFiled from './ToDoTextFiled';

const arrayTabs = ["All", "Active", "Completed"];
const getTodoFromLS = () =>{
    const todoLS = localStorage.getItem("allTodoData");
    if(todoLS){
        return JSON.parse(todoLS);
    }else{
        return [
            {
                id : "1",
                listName : "Task 1",
                isDone : false,
                isRemove : false,
            },
            {
                id : "2",
                listName : "Task 2",
                isDone : false,
                isRemove : false,
            },
            {
                id : "3",
                listName : "Task 3",
                isDone : false,
                isRemove : false,
            },
            {
                id : "4",
                listName : "Task 4",
                isDone : true,
                isRemove : false,
            }
        ];
    }
}
const TodoMain = () => {
    const inputFocus = useRef(false);
    const [toDoDataObject, setToDoObject] = useState(getTodoFromLS());
    const [allState, setAllState] = useState(
        {
            inputValue: "",
            editeTextField: "",
            editItemObj: "",
            findTopPosition : "",
            classTabs: 0,
        }
    )

    const activeAllTab = () =>{
        setAllState(allKeys => ({
            ...allKeys,
            classTabs : 0,
        }))
    }
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
            activeAllTab();
        }
    }

    const keyTypeCheck = (event) => {
        if(event.key === "Enter" && allState.inputValue.length > 0){
            todoDataObj();
            allState.inputValue = "";
            activeAllTab();
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

    const todoTabsFun = (name, index) =>{
        setAllState(allKeys => ({
            ...allKeys,
            classTabs : index
        }))
    }

    const startDraggingItems = (event) =>{
        console.log(event)
    }

    const filterActiveCount = toDoDataObject.filter((filterActiveCount) => {
        if(!filterActiveCount.isDone){
            return filterActiveCount
        }
    })

    const filterCompleteount = toDoDataObject.filter((filterCompleteount) => {
        if(filterCompleteount.isDone){
            return filterCompleteount
        }
    })


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
                        <div className={`all_todo ${allState.classTabs === 0 ? '' : allState.classTabs === 1 ? 'active_items_show' : 'complete_items_show'}`}>
                            <TodoItems 
                                allTodoList={toDoDataObject}
                                removeItems={removeSelectedItems}
                                markRead={markAsDone}
                                editItems={editTodoItems}
                                checkVisibility={allState.classTabs}
                                startDragging={startDraggingItems}>
                            </TodoItems>
                        </div>
                    : false
                }
                
                {   
                    toDoDataObject.length < 1 ?
                        <div className="no_todo">Your todo will appear here</div>
                    :
                    allState.classTabs === 1 && filterActiveCount.length < 1 ? 
                        <div className="no_todo no_height">No Active Items!</div>
                    : allState.classTabs === 2 && filterCompleteount.length < 1 ?
                        <div className="no_todo no_height">No Complete Items!</div>
                    : false
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
                
                <div className="cta_action flex">
                    <div className="pending_task">
                        {itemsCount.length} items left
                    </div>
                    <div className="flex">
                        {
                            arrayTabs.map((tabsName, index) =>{
                                return(
                                    <div className=
                                        {
                                            `tabs_todo pointer cta_btns 
                                                ${allState.classTabs === index ? "active_tabs" : ""}
                                            `
                                        }
                                        onClick={() => todoTabsFun(tabsName, index)}
                                        key={index}>{tabsName} <span className="item_count" key={index}>{index === 0 ? toDoDataObject.length : index === 1 ? filterActiveCount.length : filterCompleteount.length} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="clear_items pointer" 
                        onClick={() => {
                            const confirmRemove = window.confirm("Are You Sure?");
                            if(confirmRemove){
                                setToDoObject([]);
                            }
                        }}>
                        Clear All
                    </div>
                </div>
                
            </div>

        </>
      )

}

export default TodoMain