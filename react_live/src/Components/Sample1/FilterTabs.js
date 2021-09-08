const FilterTabs = ({uniquItems, filterItemsData, classActive}) => {
    return(
        <>
            <div className="tabs_boxes_container">
                <div className="tabs_raw">
                    {
                        uniquItems.map((itemsCate, indexVal) => {
                            return(
                                    <div key={indexVal} data-name={itemsCate} className={`tabsLink ${classActive(itemsCate)}`} onClick={filterItemsData}>{itemsCate}</div>
                                    // <div key={indexVal} data-name={itemsCate} className={`tabsLink ${classActive == indexVal ? "sss" : "nnn"}`} onClick={() => filterItemsData(itemsCate, indexVal)}>{itemsCate}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FilterTabs;