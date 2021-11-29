import React, { useContext, useState} from 'react'
import ShopingDataJson from './ShopingListData.json'
import ShopingItem from './ShopingItem'
import {} from '../ShopingCart/Shoping.css'
import { CartDataContext } from '../../Context/CartDataContext'

const ShopingMain = () => {
    const {setCartItemCount, shopingItems} = useContext(CartDataContext);
    const [shopingData, setShopingData] = useState(shopingItems);
    const [allState] = useState(
        {
            currentItem: null,
            itemsObjId: []
        }
    )
    

    const shopingDataObj = () =>{
        
        const {id, name, price, old_price, image, dexcription} = allState.currentItem;

        setShopingData(
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
        allState.itemsObjId.push(id);
        setCartItemCount(shopingData.length);
    }

    // setTimeout(() => {
    //     setCartItemCount(shopingData.length)
    // }, 1);

    const removeFromCart = (id) => {
        const removeItem = shopingData.filter((remvItems) =>{
            return remvItems.itemId !== id;
        })
        setShopingData(removeItem);
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
