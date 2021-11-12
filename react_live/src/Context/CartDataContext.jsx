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


























// const dataToSend = {
//     "id": 1,
//     "name" : "Lorem1",
//     "price": "₹700",
//     "old_price": "₹900",
//     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11165538/2020/2/3/042232c0-70c0-428f-b050-a6aa08c8e2531580723796127-Levis-Men-Tshirts-5691580723794029-1.jpg",
//     "dexcription": "Lorem ipsum dolor"
// }