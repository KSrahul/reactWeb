import React, { useState } from 'react'
import {} from './Todo.css'
import TodoItems from './TodoItems'
const TodoMain = () => {
      return(
          <>
            <div className="todo_main">
                <div className="todo_text">TO DO LIST</div>
                <div className="input_add relative">
                    <input type="text" placeholder="Add New Task" />
                    <div className="add_btn">+</div>
                </div>
                <TodoItems></TodoItems>
            </div>

        </>
      )

}

export default TodoMain