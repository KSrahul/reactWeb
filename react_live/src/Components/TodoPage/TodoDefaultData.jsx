export const TodoDefaultData = () =>{
    const todoLS = localStorage.getItem("allTodoData");
    if(todoLS){
        return JSON.parse(todoLS);
    }else{
        return [
            {
                id : "1",
                listName : "Task 1",
                isDone : false,
                isRemove : false,
            },
            {
                id : "2",
                listName : "Task 2",
                isDone : false,
                isRemove : false,
            },
            {
                id : "3",
                listName : "Task 3",
                isDone : false,
                isRemove : false,
            },
            {
                id : "4",
                listName : "Task 4",
                isDone : true,
                isRemove : false,
            },
            {
                id : "5",
                listName : "Task 5",
                isDone : false,
                isRemove : false,
            },
            {
                id : "6",
                listName : "Task 6",
                isDone : true,
                isRemove : false,
            }
        ];
    }
}
