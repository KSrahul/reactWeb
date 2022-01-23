import { useRef, useEffect } from "react"

const EditTodoModal = (props) => {
    const textAraFocus = useRef(null)

    useEffect(() => {
        textAraFocus.current.focus();
    }, [])
    return (
        <>
            <div className="flex edit_main">
                <input className="edit_val" ref={textAraFocus} onChange={props.editTodoValue} onKeyDown={props.textareaEnter} type="text" defaultValue={props.todoObj.listName} />
                <div className="flex ctn_items">
                    <div className="save_btn pointer" onClick={props.saveEditValue}>Save</div>
                    <div className="cancel_btn pointer" onClick={props.removeEditText}>Cancel</div>
                </div>
            </div>
        </>
    )
}

export default EditTodoModal
