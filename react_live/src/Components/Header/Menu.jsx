import logo from './logo.svg';
import {} from './navbar.css';
import {NavLink} from 'react-router-dom'
import { useState } from 'react';

const Menu = () => {
    const [openHame, setOpenHame] = useState(false)
    const openHamMenu = () =>{
        setOpenHame(!openHame);
    }

    const menuClick = () =>{
        setOpenHame(false);
    }
    return (
        <>
            <style>
                {
                `
                    .main_container{margin-top: 90px;color: black;}
                    .logo_cen{text-align: center;padding-top: 10px;}
                    .hamburger_icon{margin-right: 20px;}
                    .ham_menus_list{position: fixed;top: 0;width: 100%;left: 0;height: 100%;background-color: white;transform: translateY(-100%);z-index: 9;overflow: hidden;}
                    .show_ham_menus{transform: translateY(0%);transition: 0.4s;}
                    .hamburger_icon{z-index: 10;}
                    #main .ham_cross > svg{fill: red;}
                    .hamburger_icon > svg > path{transition: 0.4s;}
                    .ham_cross > svg > #hamone{transform: rotate(21deg) translateY(0px) translateX(16px);}
                    .ham_cross > svg > #hamtwo{transform: rotate(-25deg) translateY(23px) translateX(-39px);}
                    .ham_cross > svg > #hamthree{display:none;}
                    .shoping_header {background-color: #f7f7f7;box-shadow: unset;}
                    .shoping_header .hamburger_icon svg{fill: black;}
                    .cart_items {margin-right: 20px;}
                    .cart_ham{align-items: center;}
                `   
                }
            </style>
            <div className={`flex header_main ${window.location.hash === "#/reactWeb/ShopingCart" ? 'shoping_header' : ''}`}>
                <div>
                    <img src={logo} width="100" alt="logo" />
                </div>

                <div className="flex cart_ham">
                    {
                        window.location.hash === "#/reactWeb/ShopingCart" ? 
                            <div className="cart_items">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" width="35">
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
                            </div>
                        : false
                    }

                    <div className={`pointer hamburger_icon relative ${openHame ? "ham_cross" : ""}`} onClick={openHamMenu}>
                        <svg fill="white" width="40px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"/>
                            <path id="hamone" d="M95,44H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
                            <path id="hamtwo" d="M95,66H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
                            <path id="hamthree" d="M95,88H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
                        </svg>
                    </div>

                </div>
                
                <div className={`ham_menus_list ${openHame ? "show_ham_menus" : ""}`}>
                    <ul className="flex menu_list">
                        <li>
                            <NavLink exact
                                onClick={menuClick}
                                activeClassName="active_menu"
                                to="/">
                                Todo App
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact
                                onClick={menuClick}
                                activeClassName="active_menu"
                                to="/TabsMain">
                                Custom Tabs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact
                                onClick={menuClick}
                                activeClassName="active_menu"
                                to="/SearchPage">
                                Search Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact
                                onClick={menuClick}
                                activeClassName="active_menu"
                                to="/Accordion">
                                Accordion
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact
                                onClick={menuClick}
                                activeClassName="active_menu"
                                to="/ShopingCart">
                                Shopping Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;