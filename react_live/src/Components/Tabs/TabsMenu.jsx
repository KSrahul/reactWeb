import React from 'react'

export const TabsMenu = (props) => {
    return (
        <div className="tabs_raw">
            {
                props.allTabsData.map((itemsCate, indexVal) => {
                    const {id, tab_text} = itemsCate;
                    return(
                        <div key={id}
                            className={
                                `tabsLink ${props.classActiveCheck === indexVal ? "activeTabs" : ""}`
                            }
                            onClick={() => props.clickTabs(indexVal)}
                        >
                            {tab_text}
                        </div>
                    )
                })
            }
        </div>
    )
}
