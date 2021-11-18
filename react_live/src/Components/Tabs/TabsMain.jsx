import React, { useState, useEffect } from 'react';
import {} from './Tab.css';
import TabsMenu from './TabsMenu';
import TabsItems from './TabsItams';
import allTabsData from './TabsData';


const FilterMain = () => {
    const allItemsValue = [
        ...new Set(allTabsData.map((uniqItems) => {
            return uniqItems.tab_text
        }))  
    ];

    const [filterSelected] = useState(allItemsValue[0]);
    const [filterData, filterItemsData] = useState(allTabsData);
    const [classActiveCheck, classActiveFun] = useState(allItemsValue.indexOf(filterSelected));
    const clickTabs = (itemsName, indexNum) => {
        const updatedItems = allTabsData.filter((currentItem) => {
            return currentItem.tab_text === itemsName ? currentItem : false;
        })
        filterItemsData(updatedItems.length > 0 ? updatedItems : allTabsData)
        classActiveFun(indexNum);
    }

    useEffect(() => {
        const selectedFilterItems = filterData.filter((selectedFilter) => {
            return selectedFilter.tab_text === filterSelected ? selectedFilter : false;
        })
        filterItemsData(selectedFilterItems.length > 0 ? selectedFilterItems : allTabsData)
    }, []);

    return(
        <>
            <div className="tabs_main_section">
                <TabsMenu 
                    uniquItems={allItemsValue}
                    filterItemsData={clickTabs} 
                    classActive={classActiveCheck}>
                </TabsMenu>

                <TabsItems 
                    allCateItems={filterData}>
                </TabsItems>
            </div>
        </>
    )
}

export default FilterMain;