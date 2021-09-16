const SearchItems = (props) => {
    return(
        <>
            {
                props.searchItemsData.length > 0 ?
                    <div className="search_content">
                        {
                            props.searchItemsData.map((searchItes, index) => {
                                return(
                                    <div key={index} className="searchItem allEl">{searchItes.statename}</div> 
                                )
                            })
                        }
                    </div>
                :false
            }
        </>
    )
}

export default SearchItems