import logo from './logo.svg';
import {} from './navbar.css';
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className="flex header_main">
                <div>
                    <img src={logo} width="100" alt="logo" />
                </div>
                <ul className="flex menu_list">             
                    <li>
                        <NavLink exact activeClassName="active_menu" to="/">Sample1</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_menu" to="/SearchPage">Sample2</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_menu" to="/TodoPage">Sample3</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_menu" to="/Accordion">Sample4</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;