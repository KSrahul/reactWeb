import React, { useState, useEffect } from 'react';
import Filter from './Filter.css';
import FilterTabs from './FilterTabs';
import FilterItems from './FilterItems';
import allFilterData from './FilterData';


const FilterMain = () => {
    const allItemsValue = [
        "all", ...new Set(allFilterData.map((uniqItems) => {
            return uniqItems.category
        }))  
    ];

    const [filterSelected] = useState(allItemsValue[0]);
    const [filterData, filterItemsData] = useState(allFilterData);
    const [classActiveCheck, classActiveFun] = useState(allItemsValue.indexOf(filterSelected));
    const clickTabs = (itemsName, indexNum) => {
        const updatedItems = allFilterData.filter((currentItem) => {
            return currentItem.category === itemsName ? currentItem : false;
        })
        filterItemsData(updatedItems.length > 0 ? updatedItems : allFilterData)
        classActiveFun(indexNum);
    }

    useEffect(() => {
        const selectedFilterItems = filterData.filter((selectedFilter) => {
            return selectedFilter.category === filterSelected ? selectedFilter : false;
        })
        filterItemsData(selectedFilterItems.length > 0 ? selectedFilterItems : allFilterData)
    }, []);

    return(
        <>
            <FilterTabs 
                uniquItems={allItemsValue}
                filterItemsData={clickTabs} 
                classActive={classActiveCheck}>
             </FilterTabs>

            <FilterItems 
                allCateItems={filterData}>
            </FilterItems>
        </>
    )
}

export default FilterMain;