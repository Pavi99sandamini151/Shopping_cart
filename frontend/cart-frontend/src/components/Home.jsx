import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    console.log(data, error, isLoading);
    // const navigate = useNavigate();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return(
        <div>
            { isLoading ? (
            <p>Loading</p>
             ) : error ? (
            <p>An error occuered {error.data}</p>
             ) : ( 
             <>
                <h2>New Arrivals</h2>
                <div>
                    {data?.map( product => 
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <div>
                                <span>{product.desc}</span>
                                <span>${product.price}</span>
                            </div>
                            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    )}
                </div>
             </>
             )}
        </div>
    );
};

export default Home;