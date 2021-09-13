const SearchItems = ({allItems}) => {
    return(
        <>
            {
                allItems.map((searchItems) => {
                    console.log(searchItems)
                })
            }
        </>
    )
}

export default SearchItems