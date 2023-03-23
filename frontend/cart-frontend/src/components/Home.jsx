import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log(data, error, isLoading);
    return(
        <div>
            home
        </div>
    );
};

export default Home;