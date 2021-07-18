import Tab from "./Tab.css";
import React, { useState, cloneElement } from "react";

const Tabs = () => {  

    const [boxState, changeBox] = useState([]);
    let allBoxes = [
        {
            id: 0,
            boxName : 1
        },
        {
            id: 1,
            boxName : 2
        },
        {
            id: 2,
            boxName : 3
        },
        {
            id: 3,
            boxName : 4
        },
    ]
    
    function boxClick(clickEle, clickIndex){
        console.log(clickEle.id)
        console.log(clickIndex)
    }

    return(
        <>
            <div className="tabs_boxes_container">
                <div className="tabs_internal">
                    {
                        allBoxes.map((ele, boxIndex) =>{
                            return(
                                <div key={boxIndex} onClick={() => boxClick(ele, boxIndex)} className="tabs_boxes">
                                    Box{ele.boxName}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Tabs;