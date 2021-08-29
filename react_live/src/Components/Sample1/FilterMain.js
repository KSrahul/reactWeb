import React, { useState } from 'react';
import Filter from './Filter.css';
import FilterTabs from './FilterTabs';
import FilterItems from './FilterItems';
import FilterData from './FilterData';


const FilterMain = () => {
    const allItemsValue = [
        "all", ...new Set(FilterData.map((values) =>{
            return values.category;
        }))
    ];

    const [clickHandleHandle, filterDataFun] = useState(allItemsValue[0]);
    const [filterHading, filterDataHeading] = useState(allItemsValue);
    const [allData, dataFun] = useState(FilterData);
    
    const clickTabs = (itemsName) => {
        // console.log(itemsName)
        const updateItems = FilterData.filter((currentItem) => {
            if(currentItem.category == itemsName.target.textContent){
                return currentItem;
            }
        })

        dataFun(updateItems);
        
        if(itemsName.target.textContent == allItemsValue[0]){
            dataFun(FilterData);
        }
        filterDataFun(itemsName.target.textContent);
        // console.log(clickHandleHandle)
        // console.log(itemsName.target.textContent)
    }

    const classActiveCheck = (tabsName) => {
        if(clickHandleHandle == tabsName){
            return "activeTabs";
        }else{
            return "";
        }
    }
    // console.log(clickHandleHandle)

    return(
        <>
            <FilterTabs uniquItems={filterHading} filterItemsData={clickTabs} classActive={classActiveCheck}></FilterTabs>
            <FilterItems allCateItems={allData}></FilterItems>
        </>
    )
}

export default FilterMain;