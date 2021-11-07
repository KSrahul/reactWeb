import React from 'react'
import ShopingDataJson from './ShopingListData.json'
import ShopingItem from './ShopingItem'
import {} from '../ShopingCart/Shoping.css'
import {} from '../SearchPage/Search.css'

const ShopingMain = () => {
    
    return (
        <div className="all_shoping_content">




            <ShopingItem
                ShopingData = {ShopingDataJson}
            >
            </ShopingItem>
        </div>
    )
}

export default ShopingMain
