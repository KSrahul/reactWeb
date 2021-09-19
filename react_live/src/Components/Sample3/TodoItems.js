const TodoItems = (props) => {
    return(
        <>
            {
                props.listName.map((itemName, itemIndex) =>{
                    return(
                        <div key={itemIndex}>{itemName}</div>
                    )
                })
            }
        </>
    )
}

export default TodoItems