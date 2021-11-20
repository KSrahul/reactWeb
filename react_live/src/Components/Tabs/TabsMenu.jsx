import React from 'react'

export const TabsMenu = (props) => {
    return (
        <>
            <div className="tabs_raw">
                {
                    props.allTabsData.map((tabsMenu, index) => {
                        const {id, tab_text} = tabsMenu;
                        return(
                            <div key={id}
                                className={
                                    `tabsLink ${props.classActiveCheck === index ? "activeTabs" : ""}`
                                }
                                onClick={(element) => props.clickTabs(element, index)}
                            >
                                {tab_text}
                            </div>
                        )
                    })
                }
            </div>
            <div className="div_slide"></div>
        </>
    )
}
