const TodoItems = (props) => {
    return(
        <>
            {
                props.listName.map((itemName, itemIndex) =>{
                    return(
                        <div className="flex added_items" key={itemIndex}>
                            <div className="task_name">{itemName}</div>
                            <div className="remove_item flex pointer" onClick={() => props.removeItems(itemName, itemIndex)}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
                                    viewBox='0 0 24 24' fill='none' stroke='#ff3d46' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                    <polyline points='3 6 5 6 21 6' />
                                    <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
                                    <line x1='10' y1='11' x2='10' y2='17' />
                                    <line x1='14' y1='11' x2='14' y2='17' />
                                </svg>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoItems