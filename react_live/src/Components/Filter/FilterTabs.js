const FilterTabs = ({uniquItems, filterItemsData}) => {
    return(
        <>
            <div className="tabs_boxes_container">
                <div className="tabs_raw">
                    {
                        uniquItems.map((itemsCate, indexVal) => {
                            return(
                                <div key={indexVal} className="tabsLink" onClick={() => filterItemsData(itemsCate)}>{itemsCate}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FilterTabs;