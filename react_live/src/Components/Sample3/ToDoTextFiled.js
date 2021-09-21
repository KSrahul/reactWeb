import React from 'react'

function ToDoTextFiled(props) {
    return (
        <div className="input_add relative">
            <input 
                onChange={props.inputType}
                onKeyDown={props.keyCheck}
                value={props.inputValue}
                ref={props.inputFocus}
                type="text" 
                placeholder="Add New Task" />

            <div className="add_btn pointer" 
                onClick={props.addItems}>
                +
            </div>
        </div>
    )
}

export default ToDoTextFiled
