const filterAllItems = (props) => {
    return(
        <>
            <div className="items_main">
                {
                    props.allCateItems.map((allItems) =>{
                        const {id, tab_content} = allItems;
                        return( 
                            <div key={id} className="items_divs">
                                {/* <img src={image} alt={dexcription} /> */}
                                {tab_content}
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
export default filterAllItems;