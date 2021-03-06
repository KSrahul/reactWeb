import React, {useState} from 'react'
import BoxData from './BoxData.json'
import {} from './Box.css'

function BoxItems() {
    const [isSelected, setIsSelected] = useState(true);
    const boxClick = (event) => {
        setIsSelected(isSelected === event ? false : event);
    }

    
    return (
        <div className="boxes_main">
            {  
                BoxData.map((boxItem, boxId) =>{
                    return(
                        <div className={`accor_main`} key={boxId}>
                            <div className={`flex pointer`} onClick={() => boxClick(boxId)}>
                                <div className={``}>{boxItem.title}</div>
                                <div className={`acoor_icon ${isSelected === boxId ? "rotate_aero" : ""}`}>
                                    +
                                </div>
                            </div>

                            <div className={`accod_content ${isSelected === boxId  ? "show_content" : ""}`}>
                                <span className="highligh_title">
                                    Title {boxId}
                                </span> 
                                 {boxItem.content}
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoxItems
