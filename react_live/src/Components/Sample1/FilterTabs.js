// uniquItems, filterItemsData, classActive
const FilterTabs = (props) => {
    return(
        <>
            <div className="tabs_boxes_container">
                <div className="tabs_raw">
                    {
                        props.uniquItems.map((itemsCate, indexVal) => {
                            return(
                                <div key={indexVal} data-name={itemsCate}
                                    className={
                                        `tabsLink ${props.classActive === indexVal ? "activeTabs" : ""}`
                                    }
                                    onClick={() => props.filterItemsData(itemsCate, indexVal)}
                                >
                                    {itemsCate}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FilterTabs;