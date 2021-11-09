import React from 'react'
import ShopingDataJson from './ShopingListData.json'
import ShopingItem from './ShopingItem'
import {} from '../ShopingCart/Shoping.css'
import {} from '../SearchPage/Search.css'

const ShopingMain = () => {
    const addToCart = (event) => {
        console.log(event.target)
    }
    return (
        <div className="all_shoping_content">




            <ShopingItem
                ShopingData={ShopingDataJson}
                addToCart={addToCart}
            >
            </ShopingItem>
        </div>
    )
}

export default ShopingMain
