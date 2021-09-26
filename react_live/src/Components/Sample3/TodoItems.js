const TodoItems = (props) => {
    return(
        <>
            {
                props.allTodoList.map((todoListObj) =>{
                    return(
                        <div className={`flex added_items ${todoListObj.isDone === true ? 'marked_done' : ''}`} key={todoListObj.id}>
                            <div className="task_name">{todoListObj.listName}</div>
                            <div className="flex right_icons">
                                <div className="flex pointer edit_icon" onClick={() => props.editItems(todoListObj)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                                        <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z" />
                                    </svg>
                                </div>
                                <div className="pointer eye_mark relative flex" onClick={() => props.markRead(todoListObj)}>
                                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                                    </svg>
                                    <div className="lin_eye"></div>
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