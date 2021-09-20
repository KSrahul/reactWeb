import logo from './logo.svg';
import {} from './navbar.css';
import {Link, NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className="flex header_main">
                <div>
                    <img src={logo} width="100" alt="logo" />
                </div>
                <ul className="flex menu_list">             
                    <li>
                        <NavLink exact to="/">Sample1</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Example2">Sample2</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Example3">Sample3</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;