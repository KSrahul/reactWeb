import React, { useContext, useState, useEffect} from 'react'
import ShopingDataJson from './ShopingListData.json'
import ShopingItem from './ShopingItem'
import {} from '../ShopingCart/Shoping.css'


const getShopingData = () =>{
    const shopingData = localStorage.getItem("allShopingData");
    if(shopingData){
        return JSON.parse(shopingData);
    }else{
        return [];
    }
}
const ShopingMain = () => {
    const [shopingData, shopingDataFun] = useState(getShopingData());

    const [allState] = useState(
        {
            currentItem: null,
            itemsObjId: []
        }
    )
    

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
        allState.itemsObjId.push(id)
    }

    const removeFromCart = (id) => {
        const removeItem = shopingData.filter((remvItems) =>{
            return remvItems.itemId !== id;
        })

        shopingDataFun(removeItem);
    }

    // const showCart = () =>{
    //     alert("Cliked")
    // }
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
