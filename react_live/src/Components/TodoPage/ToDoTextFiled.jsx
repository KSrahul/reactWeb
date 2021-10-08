import React from 'react'

function ToDoTextFiled(props) {
    return (
        <div className="input_add relative">
            <input 
                onChange={props.inputType}
                onKeyDown={props.keyCheck}
                value={props.textAreaVal}
                ref={props.inputFocus}
                type="text" 
                placeholder="Add New Task" />

            <div className={`add_btn pointer ${props.textAreaVal.length > 0 ? "active_cta" : ""}`}
                onClick={props.addItems}>
                +
            </div>
        </div>
    )
}

export default ToDoTextFiled
