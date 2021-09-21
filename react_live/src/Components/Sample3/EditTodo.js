const EditTodo = (props) => {
    return (
        <>
            <div className="quick_edit">
                <div className="cross_sign pointer" onClick={props.removeEditText}>
                    Close
                </div>
                <div className="text_save pointer">
                    <textarea onChange={props.editTodoValue} onKeyDown={props.textareaEnter} value={props.editeTodoField}></textarea>
                    <div className="save_btn" onClick={props.saveEditValue}>Save</div>
                </div>
            </div>
        </>
    )
}

export default EditTodo
