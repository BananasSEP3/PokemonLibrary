import {Outlet, Link} from "react-router-dom";
import './layout.css'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Pokedox">Pokedox</Link>
                    </li>
                    <li>
                        <Link to="/Shop">Shop</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout;