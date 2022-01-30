import React from 'react'

const TabsContent = (props) => {
    return (
        <div className="items_main">
            {
                props.TabContent.map((element, index) => {
                    return(
                        props.activeContent === index ?
                            <div key={index} className="items_divs">
                                {element.tab_content}
                            </div>
                        : false
                    )
                })
            }
        </div>
    )
}

export default TabsContent
