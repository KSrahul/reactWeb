import React, {useState, useRef, useEffect} from 'react'
import BoxData from './BoxData.json'
import {} from './Box.css'

function BoxItems() {
    const [isSelected, setSelected] = useState("");
    const boxClick = (event) => {
        setSelected(isSelected === event ? false : event);
    }
    
    return (
        <div className="boxes_main">
            {  
                BoxData.map((boxItem, boxId) =>{
                    return(
                        <div className="accor_main" key={boxId}>
                            
                            <div className={`pointer`} onClick={() => boxClick(boxId)}>{boxItem.title}</div>

                            <div className={`accod_content ${isSelected === boxId ? "show_content" : ""}`}>{boxItem.content}</div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoxItems
