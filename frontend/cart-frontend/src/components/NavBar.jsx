import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const cartTotalQuantity = useSelector(state => state.cart);
    console.log(cartTotalQuantity);
    return (
        <nav className="navBar">
            <Link to="/" >
                <h2>Online Shopping</h2>
            </Link>
            <Link to="/cart">
                <h2>Cart</h2>
                <span>{cartTotalQuantity.cartTotalQuantity}</span>
            </Link>
        </nav>
    );
};

export default NavBar;