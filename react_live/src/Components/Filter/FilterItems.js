const filterAllItems = ({allCateItems}) => {
    return(
        <>
            <div className="items_main">
                {
                    allCateItems.map((allItems) =>{
                        const {id, image, category, dexcription} = allItems;
                        return(
                            <div key={id} className="items_divs">
                                <img src={image} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
export default filterAllItems;