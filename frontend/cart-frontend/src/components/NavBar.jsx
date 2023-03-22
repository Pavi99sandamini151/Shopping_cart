import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to="/" >
                <h2>Online Shopping</h2>
            </Link>
            <Link to="/cart">
                <h2>Cart</h2>
            </Link>
        </nav>
    );
};

export default NavBar;