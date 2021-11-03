const TodoItems = (props) => {
    return(
        <>
            {
                props.allTodoList.map((todoListObj, i) =>{
                    return(
                        <div className={`flex added_items ${todoListObj.isDone ? 'marked_done' : ''}`} key={todoListObj.id}
                            draggable="true"
                            onDragStart={props.startDragging}>
                            <div className="flex align-v-center">
                                <div className="relative">
                                    <input className="pointer def_check" checked={todoListObj.isDone ? true : false} type="checkbox" onChange={() => props.markRead(todoListObj)} />
                                    <div className="check"></div>
                                </div>
                                <div className="task_name">{todoListObj.listName}</div>
                            </div>
                            <div className="flex right_icons">
                                <div className="flex pointer edit_icon" onClick={(targetElement) => props.editItems(todoListObj, targetElement)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#44b8e4">
                                        <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z" />
                                    </svg>
                                </div>
                                <div className="remove_item flex pointer" onClick={() => props.removeItems(todoListObj.id)}>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' 
                                        viewBox='0 0 24 24' fill='none' stroke='#ff3d46' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <polyline points='3 6 5 6 21 6' />
                                        <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
                                        <line x1='10' y1='11' x2='10' y2='17' />
                                        <line x1='14' y1='11' x2='14' y2='17' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoItems