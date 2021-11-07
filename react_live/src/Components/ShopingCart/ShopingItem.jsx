const ShopingItem = (props) => {
    return(
        <div className="product_list">
            {
                props.ShopingData.map((data) => {
                    const {id, image, name, old_price, price, dexcription} = data;

                    return(
                        <div className="item_main" key={id}>
                            <img src={image} alt={dexcription}/>
                            <div className="prod_details">
                                <div className="item_name">{name}</div>
                                <div className="item_desc">{dexcription}</div>
                                <div className="flex">
                                    <div className="item_price">{price} </div>
                                    <div className="item_old_price">{old_price}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShopingItem