import { useSelector, useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, removeFromCart } from "../features/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const backHome = () => {
        navigate("/");
    };
    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    const handleDecreaseCartItem = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };
    const handleIncreaseCartItem = (cartItem) => {
        dispatch(addToCart(cartItem));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return(
        <div>
            <h2>Shopping Cart</h2>
            { cart.cartItems.length === 0 ? (
                <div>
                    <p>Your cart is currently empty</p>
                    <div>
                        <button onClick={() => backHome()}>Back to Home</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Total</h3>
                    <div>
                        {cart.cartItems?.map(cartItem => (
                            <div key={cartItem.id}>
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.desc}</p>
                                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                </div>
                                <div>
                                    ${cartItem.price}
                                </div>
                                <div>
                                    <button onClick={() => handleDecreaseCartItem(cartItem)}>Button -</button>
                                </div>
                                <div>{cartItem.cartQuantity}</div>
                                <div>
                                    <button onClick={() => handleIncreaseCartItem(cartItem)}>Button +</button>
                                </div>
                                <div>
                                    ${cartItem.price * cartItem.cartQuantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={() => handleClearCart()}>
                            Clear Cart
                        </button>
                    </div>
                    <div>
                        <div>
                           <h2>Sub total</h2>
                           <span>${cart.cartTotalAmount}</span>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Check Out</button>
                        <div>
                        <button onClick={() => backHome()}>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;