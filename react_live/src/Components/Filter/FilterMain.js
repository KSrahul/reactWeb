import React, { useState } from 'react';
import Filter from './Filter.css';
import FilterTabs from './FilterTabs';
import FilterItems from './FilterItems';
import FilterData from './FilterData';


const FilterMain = () => {
    // const number = [1, 2, 3, 4, 5, 6, 1, 3, 5];

    const allItemsValue = [
        ...new Set(FilterData.map((values) =>{
            return values.category;
        })), "all"
    ];

    const [filterHading, filterDataHeading] = useState(allItemsValue);
    const [allData, dataFun] = useState(FilterData);
    
    const clickTabs = (itemsName) => {
        const updateItems = FilterData.filter((currentItem) => {
            if(currentItem.category == itemsName){
                return currentItem;
            }
            // console.log(currentItem)
        })

        // console.log(itemsName)
        dataFun(updateItems);
        
        if(itemsName == "all"){
            dataFun(FilterData);
        }
        // console.log(updateItems)
    }

    return(
        <>
            <FilterTabs uniquItems={filterHading} filterItemsData={clickTabs}></FilterTabs>
            <FilterItems allCateItems={allData}></FilterItems>
        </>
    )
}

export default FilterMain;