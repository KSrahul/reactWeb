import React, {useState, useEffect} from 'react'
import BoxData from './BoxData.json'
import {} from './Box.css'

function BoxItems() {
    const [boxClass, setBoxClass] = useState(0);
    const boxClick = (event) => {
        setBoxClass(event.id);
    }
    
    return (
        <div className="boxes_main">
            {  
                BoxData.map((boxItem, boxId) =>{
                    return(
                        <div className={`boxes pointer ${boxClass === boxId ? 'active_box' : ''}`} key={boxId} onClick={() => boxClick(boxItem)}>{boxItem.title}</div>
                    )
                })
            }
        </div>
    )
}

export default BoxItems
