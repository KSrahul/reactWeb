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
            itemsObjId: ""
        }
    )

    if(JSON.parse(cartItemsData.cartItemsData)){
        // JSON.parse(cartItemsData.cartItemsData).map((allItems) =>{
        //     allState.itemsObjId += allItems.itemId
        // })
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
                    itemDesc : dexcription,
                    quantity : 1
                },
                ...shopingData
            ]
        )
    }

    const addToCart = (items, id) => {
        allState.currentItem = items;
        shopingDataObj();
        let string = ""
        string += String(id)
        // allState.itemsObjId += string;
        console.log(string)
    }

    const removeFromCart = (id) => {
        const removeItem = shopingData.filter((remvItems) =>{
            return remvItems.itemId !== id;
        })

        shopingDataFun(removeItem);
    }

    localStorage.setItem("allShopingData", JSON.stringify(shopingData));

    return (
        <div className="all_shoping_content">




            <ShopingItem
                ShopingData={ShopingDataJson}
                addToCart={addToCart}
                itemsObjId={allState.itemsObjId}
                removeFromCart={removeFromCart}
            >
            </ShopingItem>
        </div>
    )
}

export default ShopingMain
