const filterAllItems = (props) => {
    return(
        <>
            <div className="items_main">
                {
                    props.allCateItems.map((allItems) =>{
                        const {id, image, category, dexcription} = allItems;
                        return( 
                            <div key={id} className="items_divs" data-itemcate={category}>
                                <img src={image} alt={dexcription} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
export default filterAllItems;