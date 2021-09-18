import logo from './logo.svg';
import {} from './navbar.css';
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className="flex header_main">
                <div>
                    <img src={logo} width="100" alt="logo" />
                </div>
                <ul className="flex menu_list">             
                    <li>
                        <Link to="/">Sample1</Link>
                    </li>
                    <li>
                        <Link to="/Example2">Sample2</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;