import React, { createContext, useState } from "react";

export const CartDataContext = createContext();

export const DataToSendFun = (props) =>{
    const shopingData = localStorage.getItem("allShopingData");
    const [cartItemsData, cartItemsFun] = useState(shopingData);

    return(

        <CartDataContext.Provider value={{
            cartItemsData
        }}>
            {props.children}
        </CartDataContext.Provider>
    )
}