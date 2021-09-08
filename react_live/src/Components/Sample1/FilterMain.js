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
    const [allData, filterItemsData] = useState(FilterData);
    
    const clickTabs = (itemsName, indexNum) => {
        const updateItems = FilterData.filter((currentItem) => {
            if(currentItem.category == itemsName.target.dataset.name){
                return currentItem;
            }
        })

        filterItemsData(updateItems);
        
        if(itemsName.target.dataset.name == allItemsValue[0]){
            filterItemsData(FilterData);
        }

        filterDataFun(itemsName.target.dataset.name);
    }

    const classActiveCheck = (tabsName) => {
        if(clickHandleHandle == tabsName){
            return "activeTabs";
        }else{
            return "";
        }
    }

    return(
        <>
            <FilterTabs uniquItems={filterHading} filterItemsData={clickTabs} classActive={classActiveCheck}></FilterTabs>
            <FilterItems allCateItems={allData}></FilterItems>
        </>
    )
}

export default FilterMain;