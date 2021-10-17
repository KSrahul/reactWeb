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
                    .ham_menus_list{position: fixed;top: 0;width: 100%;left: 0;height: 100%;background-color: white;transform: translateY(-100%);z-index: 9;}
                    .show_ham_menus{transform: translateY(0%);transition: 0.4s;}
                    .hamburger_icon{z-index: 10;}
                    .ham_cross > svg{fill: red;}
                    .hamburger_icon > svg > path{transition: 0.4s;}
                    .ham_cross > svg > #hamone{transform: rotate(21deg) translateY(0px) translateX(16px);}
                    .ham_cross > svg > #hamtwo{transform: rotate(-25deg) translateY(23px) translateX(-39px);}
                    .ham_cross > svg > #hamthree{display:none;}
                `   
                }
            </style>
            {/* <div className="logo_cen">
                <img src={logo} width="100" alt="logo" />
            </div> */}
            <div className="flex header_main">
                <div>
                    <img src={logo} width="100" alt="logo" />
                </div>
                <div className={`pointer hamburger_icon relative ${openHame ? "ham_cross" : ""}`} onClick={openHamMenu}>
                    <svg fill="black" width="40px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"/>
                        <path id="hamone" d="M95,44H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
                        <path id="hamtwo" d="M95,66H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
                        <path id="hamthree" d="M95,88H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
                    </svg>
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
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;