import React, { useContext, useState} from 'react'
import ShopingDataJson from './ShopingListData.json'
import ShopingItem from './ShopingItem'
import {} from '../ShopingCart/Shoping.css'
import { CartDataContext } from '../../Context/CartDataContext'


const getShopingData = () =>{
    const shopingData = localStorage.getItem("allShopingData");
    if(shopingData){
        return JSON.parse(shopingData);
    }else{
        return [];
    }
}
const ShopingMain = () => {
    const cartItemsData = useContext(CartDataContext)
    const [shopingData, shopingDataFun] = useState(getShopingData())

    const [allState, setAllState] = useState(
        {
            currentItem: null,
            itemsObjId: []
        }
    )

    if(JSON.parse(cartItemsData.cartItemsData)){
        JSON.parse(cartItemsData.cartItemsData).map((allItems) =>{
            allState.itemsObjId.push(allItems.itemId)
        })
    }

    const shopingDataObj = () =>{
        
        const {id, name, price, old_price, image, dexcription} = allState.currentItem;

        shopingDataFun(
            [
                {
                    itemId : id,
                    itemName : name,
                    itemPrice : price,
                    itemOldPrice : old_price,
                    itemImage : image,
                    itemDesc : dexcription
                },
                ...shopingData
            ]
        )
    }

    const addToCart = (items, id) => {
        allState.currentItem = items;
        shopingDataObj();
        allState.itemsObjId.push(id)
    }

    localStorage.setItem("allShopingData", JSON.stringify(shopingData));
    
    return (
        <div className="all_shoping_content">




            <ShopingItem
                ShopingData={ShopingDataJson}
                addToCart={addToCart}
                itemsObjId={allState.itemsObjId}
            >
            </ShopingItem>
        </div>
    )
}

export default ShopingMain
