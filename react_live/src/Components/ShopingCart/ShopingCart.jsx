import React, { useState } from 'react'

export const ShopingCartIcon = () =>{
    const [showCart, setShowCart] = useState(false);

    const showCartItems = () =>{
        setShowCart(false)
    }
    return (
        <>
            {
                window.location.hash === "#/reactWeb/ShopingCart" ? 
                    <div className="cart_items relative" onClick={showCartItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" width="42">
                            <path fill="#00efd1"
                                d="M455.13,137.68l-31.16,97.1a50,50,0,0,1-47.61,34.72H156.5l-.97.17L133.16,137.91l1.37-.23Z"></path>
                            <path fill="#00acea" d="M380.32,383.88a36.06,36.06,0,1,1-36.06,36.06A36.058,36.058,0,0,1,380.32,383.88Z"></path>
                            <circle cx="199.04" cy="419.94" r="36.06" fill="#00acea"></circle>
                            <path fill="#083863"
                                d="M199.04,373.88a46.06,46.06,0,1,0,46.06,46.06A46.113,46.113,0,0,0,199.04,373.88Zm0,72.12a26.06,26.06,0,1,1,26.06-26.06A26.09,26.09,0,0,1,199.04,446Z">
                            </path>
                            <path fill="#083863"
                                d="M380.32,373.88a46.06,46.06,0,1,0,46.05,46.06A46.114,46.114,0,0,0,380.32,373.88Zm0,72.12a26.06,26.06,0,1,1,26.05-26.06A26.09,26.09,0,0,1,380.32,446Z">
                            </path>
                            <path fill="#083863"
                                d="M455.13,127.68H141.566l-6.8-40.04A49.865,49.865,0,0,0,85.47,46H56.87a10,10,0,0,0,0,20h28.6a29.918,29.918,0,0,1,29.581,24.983L151.262,304.3a49.883,49.883,0,0,0,49.3,41.634H413.73a10,10,0,0,0,0-20H200.56a29.932,29.932,0,0,1-29.58-24.982L167.339,279.5H376.36a59.814,59.814,0,0,0,57.131-41.665l31.16-97.1a10,10,0,0,0-9.521-13.055ZM414.448,231.724A39.877,39.877,0,0,1,376.36,259.5H163.943L144.962,147.68H441.419Z">
                            </path>
                        </svg>
                        <div className="cart_count">0</div>
                    </div>
                : false
            }
        </>
    )
}

export const ShopingCartItems = (props) =>{
    return (
        <div className={`cart_main ${props.showCart ? 'show_cart_main' : ''}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quibusdam doloremque velit tempore sit incidunt necessitatibus officia voluptates odit laudantium ullam hic nobis voluptatum! Voluptatum voluptates delectus asperiores dolores quasi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quibusdam doloremque velit tempore sit incidunt necessitatibus officia voluptates odit laudantium ullam hic nobis voluptatum! Voluptatum voluptates delectus asperiores dolores quasi?
        </div>
    )
}
