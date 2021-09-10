import React, { useState } from 'react';
import Filter from './Filter.css';
import FilterTabs from './FilterTabs';
import FilterItems from './FilterItems';
import allFilterData from './FilterData';


const FilterMain = () => {
    const allItemsValue = [
        "all", ...new Set(allFilterData.map((values) =>{
            return values.category;
        }))
    ];

    const [classActive, classActiveFun] = useState(0);
    const [filterData, filterItemsData] = useState(allFilterData);
    
    const clickTabs = (itemsName, indexNum) => {
        const updatedItems = allFilterData.filter((currentItem) => {
            return currentItem.category === itemsName ? currentItem : false;
        })

        filterItemsData(updatedItems.length > 0 ? updatedItems : allFilterData)

        classActiveFun(indexNum);
    }

    return(
        <>
            <FilterTabs 
                uniquItems={allItemsValue}
                filterItemsData={clickTabs} 
                classActive={classActive}>
             </FilterTabs>
             
            <FilterItems 
                allCateItems={filterData}>
            </FilterItems>
        </>
    )
}

export default FilterMain;