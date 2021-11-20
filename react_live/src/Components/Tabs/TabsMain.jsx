import allTabsData from './TabsData';
import {} from './Tab.css'
import { useState } from 'react';
import TabsContent from './TabsContent';
import { TabsMenu } from './TabsMenu';

const FilterTabs = () => {
    const [classActiveCheck, classActiveFun] = useState(0);
    const clickTabs = (element, indexNum) => {
        classActiveFun(indexNum);
        console.log(element.target.getBoundingClientRect())
    }
    return(
        <div className="tabs_boxes_container">
            <TabsMenu 
                allTabsData={allTabsData} 
                classActiveCheck={classActiveCheck} 
                clickTabs={clickTabs} 
            />
            
            <TabsContent 
                TabContent={allTabsData} 
                activeContent={classActiveCheck} 
            />
        </div>
    )
}

export default FilterTabs;