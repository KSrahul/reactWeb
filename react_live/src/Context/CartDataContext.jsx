import React, { createContext, useState } from "react";

export const CartDataContext = createContext();

export const DataToSendFun = (props) =>{
    const shopingData = JSON.parse(localStorage.getItem("allShopingData"))
    const [cartItemsData] = useState(shopingData);
    // const [currentCartItems, setCurrentCartItems] = useState("Rahul");
    // console.log(currentCartItems)
    const currentItemCount = props.cartCount;
    return(

        <CartDataContext.Provider value={{
            cartItemsData, 
            currentItemCount
        }}>
            {props.children}
        </CartDataContext.Provider>
    )
}

// export const currentCartItems = (props) =>{

// }