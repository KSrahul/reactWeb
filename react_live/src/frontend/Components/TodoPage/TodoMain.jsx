import React, { useEffect, useReducer, useRef } from 'react'
import {} from './Todo.css'
import {TodoItems} from './TodoItems'
import {ToDoTextFiled} from './ToDoTextFiled';
import {TodoTabs} from './TodoTabs';
import {TodoDefaultData} from './TodoDefaultData';

const todoActionsType = {
    ADD_ITEMS: "ADD_ITEMS",
    REMOVE_ITEMS: "REMOVE_ITEMS",
    EDIT_ITEMS: "EDIT_ITEMS",
    DONE_ITEMS: "DONE_ITEMS",
    REMOVE_ALL_ITEMS: "REMOVE_ALL_ITEMS",
    TOGGLE_TABS: "TOGGLE_TABS",
    COMPLETE_ITEMS: "COMPLETE_ITEMS",
    REMOVEITEM: "REMOVEITEM",
    HIDE_EDIT: "HIDE_EDIT",
    EDIT_VALUE_UPDATE: "EDIT_VALUE_UPDATE",
    SAVE_EDIT_VALUE: "SAVE_EDIT_VALUE"
}

const todoDefaultStates = {
    todoAllData: TodoDefaultData(),
    inputValue: "",
    editeTextField: "",
    editItemObj: "",
    classTabs: 0,
    todoCount: 0
}

const todoReducer = (todoState, todoAction) =>{
    switch (todoAction.type) {
        case "GET_VAL":
            return {
                ...todoState, 
                inputValue : todoAction.inputTextValue
            };
        case todoActionsType.ADD_ITEMS:            
            return {
                ...todoState,
                todoAllData: [
                    { 
                        id: new Date().getTime().toString(), 
                        listName: todoState.inputValue, 
                        isDone : false, 
                        isRemove : false
                    },
                  ...todoState.todoAllData,
                ],
                inputValue: "",
              }
        case todoActionsType.REMOVE_ALL_ITEMS:            
            return {
                ...todoState,
                todoAllData: []
            }
        case todoActionsType.TOGGLE_TABS:
            return {
                ...todoState,
                classTabs : todoAction.classTabsIndex,
                inputValue: "",
            }
        case todoActionsType.COMPLETE_ITEMS:
            return {
                ...todoState,
                todoAllData: todoAction.markedReadData
              }
        case todoActionsType.REMOVEITEM:
            return {
                ...todoState,
                todoAllData: todoAction.removeItem
            }
        case todoActionsType.EDIT_ITEMS:
            return {
                ...todoState,
                editItemObj : todoAction.editItemObj,
                editeTextField : todoAction.editeTextField
            }
        case todoActionsType.HIDE_EDIT:
            return {
                ...todoState,
                editItemObj: ""
            }
        case todoActionsType.EDIT_VALUE_UPDATE:
            return {
                ...todoState,
                editeTextField : todoAction.editeTextField
            }
        case todoActionsType.SAVE_EDIT_VALUE:
            todoState.todoAllData.filter((saveValue) => {
                if(saveValue.id === todoState.editItemObj.id){
                    saveValue.listName = todoState.editeTextField;
                }
                return saveValue
            });
            return {
                ...todoState,
                editItemObj: "",
            }
        default:
            return {...todoState}
    }
}

const TodoMain = () => {
    const inputFocus = useRef(false);
    const [todoCurrentData, todoDataUpdate] = useReducer(todoReducer, todoDefaultStates)
    
    const inputOnType = (event) => {
        const getInputValue = {
            type: "GET_VAL",
            inputTextValue : event.target.value
        }
        todoDataUpdate(getInputValue)
    }

    const addItemsMethod = () =>{
        todoDataUpdate({
            type: todoActionsType.ADD_ITEMS
        })
    }

    const addItemBtn = () => {
        if(todoCurrentData.inputValue.length > 0){
            addItemsMethod()
        }else{
            alert("Input can't be blank!")
        }
    }
    
    const keyTypeCheck = (event) => {
        if(event.key === "Enter" && todoCurrentData.inputValue.length > 0){
            addItemsMethod()
        }
    }
    
    const todoTabsToggle = (index) =>{
        todoDataUpdate({
            type: todoActionsType.TOGGLE_TABS,
            classTabsIndex : index
        })
    }

    const clearAll = () =>{
        const confirmRemove = window.confirm("Are You Sure?");
        if(confirmRemove){
            todoDataUpdate({
                type: todoActionsType.REMOVE_ALL_ITEMS
            })
        }
    }

    const activeCount = todoCurrentData.todoAllData.filter((activeCount) => {
        return !activeCount.isDone
    })

    const completeCount = todoCurrentData.todoAllData.filter((completeCount) => {
        return completeCount.isDone
    })

    const markAsDone = (itemObj) => {
        const markedReadData = todoCurrentData.todoAllData.filter((markedRead) => {
            if(markedRead.id === itemObj.id){
                !markedRead.isDone ? markedRead.isDone = true : markedRead.isDone = false;
            }
            return markedRead;
        })

        todoDataUpdate({
            type: todoActionsType.COMPLETE_ITEMS,
            markedReadData: markedReadData
        })
    }

    const removeSelectedItems = (targetTodoItem) => {
        const restTodoData = todoCurrentData.todoAllData.filter((todoNew) =>{
            return todoNew.id !== targetTodoItem;
        })
        
        todoDataUpdate({
            type: todoActionsType.REMOVEITEM,
            removeItem: restTodoData
        })
    }

    const editTodoItems = (editObj) => {
        todoDataUpdate({
            type: todoActionsType.EDIT_ITEMS,
            editeTextField : editObj.listName,
            editItemObj : editObj
        })
    }

    const closeEditModal = () =>{
        todoDataUpdate({
            type: todoActionsType.HIDE_EDIT
        })
    }

    const saveEditData = () => {
        todoDataUpdate({
            type: todoActionsType.SAVE_EDIT_VALUE,
        })
    }

    const textareaEnterPress = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            todoDataUpdate({
                type: todoActionsType.SAVE_EDIT_VALUE,
            })
        }
    }

    const newEditValue = (event) => {
        if (event.target.value) {
            todoDataUpdate({
                type: todoActionsType.EDIT_VALUE_UPDATE,
                editeTextField : event.target.value
            })
        }   
    }

    localStorage.setItem("allTodoData", JSON.stringify(todoCurrentData.todoAllData));

    useEffect(() => {
        inputFocus.current.focus();
    }, [todoCurrentData.inputValue])
    
    return(
        <div className="todo_main">
            <div className="todo_text">Add Your Todo List</div>
            <ToDoTextFiled
                inputType={inputOnType}
                textAreaVal={todoCurrentData.inputValue}
                keyCheck={keyTypeCheck}
                inputFocus={inputFocus}
                addItems={addItemBtn}>
            </ToDoTextFiled>
            
            {todoCurrentData.todoAllData && 
                <div className={`all_todo ${todoCurrentData.classTabs === 1 ? 'active_items_show' : todoCurrentData.classTabs === 2 ? 'complete_items_show' : ''}`}>
                    <TodoItems
                        allTodoList={todoCurrentData.todoAllData}
                        editTxtField={todoCurrentData.editItemObj}
                        markRead={markAsDone}
                        removeItems={removeSelectedItems}
                        editItems={editTodoItems}
                        removeEditText={closeEditModal}
                        editTodoValue={newEditValue}
                        saveEditValue={saveEditData}
                        textareaEnter={textareaEnterPress}>
                    </TodoItems>
                </div>
            }

            {todoCurrentData.todoAllData.length < 1 && 
                <div className="no_todo">Your todo will appear here</div>
            }

            {todoCurrentData.todoAllData.length > 0 &&                
                <TodoTabs
                    allCount={todoCurrentData.todoAllData.length}
                    classTabs={todoCurrentData.classTabs}
                    todoTabsToggle={todoTabsToggle}
                    clearAll={clearAll}
                    activeCount={activeCount.length}
                    completeCount={completeCount.length}>
                </TodoTabs>
            }
        </div>
    )
}
export default TodoMain