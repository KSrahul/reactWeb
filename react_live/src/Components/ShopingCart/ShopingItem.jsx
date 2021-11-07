const ShopingItem = (props) => {
    return(
        <div className="product_list">
            {
                props.ShopingData.map((data) => {
                    const {id, image, name, old_price, price, dexcription} = data;

                    return(
                        <div className="item_main" key={id}>
                            <div className="relative">
                                <img className="prod_img" src={image} alt={dexcription}/>
                                <div className="fav_icons pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h24v24H0z"></path>
                                            <path d="M16.665 3.286C20.002 3.286 22 5.239 22 8.509c0 2.678-2.455 4.922-2.556 5.022l-6.953 6.697a.692.692 0 0 1-.491.2.692.692 0 0 1-.491-.2l-6.964-6.72c-.09-.077-2.545-2.32-2.545-5 0-3.27 1.998-5.222 5.335-5.222 1.953 0 3.783 1.54 4.665 2.41.882-.87 2.712-2.41 4.665-2.41z" stroke="#fffbfb" strokeWidth="1.5"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="prod_details">
                                <div className="item_name">{name}</div>
                                <div className="item_desc">{dexcription}</div>
                                <div className="flex">
                                    <div className="item_price">{price} </div>
                                    <div className="item_old_price">{old_price}</div>
                                </div>
                                <div className="add_item pointer">Add To Cart</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShopingItem