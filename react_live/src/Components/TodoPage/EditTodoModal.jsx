import { useRef, useEffect } from "react"

const EditTodoModal = (props) => {
    const textAraFocus = useRef(null)

    useEffect(() => {
        textAraFocus.current.select();
        textAraFocus.current.focus();
    }, [])
    return (
        <>
            <div className="quick_edit">
                <div className="cross_sign pointer" onClick={props.removeEditText}>
                    <svg stroke="white" fill="whiite" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" stroke="white" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path>
                    </svg>
                </div>
                <div className="text_save pointer" style={{top: props.topPosition + 44}}>
                    <textarea onChange={props.editTodoValue} onKeyDown={props.textareaEnter} ref={textAraFocus} defaultValue={props.editeTodoField}></textarea>
                    <div className="save_btn" onClick={props.saveEditValue}>Save</div>
                </div>
            </div>
        </>
    )
}

export default EditTodoModal
