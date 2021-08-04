const FilterTabs = ({uniquItems, filterItemsData, classActive}) => {
    return(
        <>
            <div className="tabs_boxes_container">
                <div className="tabs_raw">
                    {
                        uniquItems.map((itemsCate, indexVal) => {
                            return(
                                <div key={indexVal} className={`tabsLink ${classActive(itemsCate)}`} onClick={filterItemsData}>{itemsCate}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FilterTabs;