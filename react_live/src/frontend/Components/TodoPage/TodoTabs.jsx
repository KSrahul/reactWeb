import React from 'react'

const arrayTabs = ["All", "Active", "Completed"];
export const TodoTabs = (props) => {
    return (
        <div className="cta_action flex"> 
            <div className="pending_task">{props.allCount} items left</div>
            <div className="flex">
                {
                    arrayTabs.map((tabsName, index) =>{
                        return(
                            <div key={index} onClick={() => props.todoTabsToggle(index)} className={
                                    `tabs_todo pointer cta_btns 
                                        ${props.classTabs === index ? "active_tabs" : ""}
                                    `
                                }>

                                {tabsName}
                                <span className="item_count">{index === 0 ? props.allCount : index === 1 ? props.activeCount : props.completeCount}</span>
                            </div>
                        )       
                    })
                }
            </div>
            <div className="clear_items pointer" onClick={() => props.clearAll()}>Clear All</div>
        </div>
    )
}
