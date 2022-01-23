import React, { createContext, useState } from "react";

export const CartDataContext = createContext();

export const DataToSendFun = (props) =>{
    const getShopingData = () =>{
        const shopingData = localStorage.getItem("allShopingData");
        if(shopingData){
            return JSON.parse(shopingData);
        }else{
            return [];
        }
    }
    const [shopingItems, setShopingItems] = useState(getShopingData());
    const [cartItemCount, setCartItemCount] = useState(shopingItems.length);
    return(

        <CartDataContext.Provider value={{
            shopingItems,
            setShopingItems,
            cartItemCount,
            setCartItemCount
        }}>
            {props.children}
        </CartDataContext.Provider>
    )
}

// export const currentCartItems = (props) =>{

// }