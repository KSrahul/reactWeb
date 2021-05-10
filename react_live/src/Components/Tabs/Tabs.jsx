import Tab from "./Tab.css";
import React, { useState } from "react";

const Tabs = () => {    
    const [boxState, changeBox] = useState({
        activeBox : null,
        boxUnique : [
            {
                id : 1, boxName : "Box1",
            },
            {
                id : 2, boxName : "Box2",
            },
            {
                id : 3, boxName : "Box3",
            },
            {
                id : 4, boxName : "Box4",
            },
            {
                id : 5, boxName : "Box5",
            },
            {
                id : 6, boxName : "Box6",
            },
        ]
    })
    
    

    function boxClick(boxIndex) {
        changeBox({ ...boxState, activeBox : boxState.boxUnique[boxIndex]})
        console.log(boxState.boxUnique[boxIndex])
    }

    function toggleClass(boxIndex){
        if(boxState.boxUnique[boxIndex] == boxState.activeBox){
            return "tabs_boxes box_activated";
        }else{
            return "tabs_boxes notactivated";
        }
    }
    

    return(
        <>
            <div className="tabs_boxes_container">
                <div className="tabs_internal">
                    {
                        boxState.boxUnique.map((boxEle, boxIndex) =>{
                            return(
                                <div key={boxIndex} className={toggleClass(boxIndex)} 
                                    onClick={() => {
                                        boxClick(boxIndex)  
                                    }}
                                >
                                    {boxEle.boxName}
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