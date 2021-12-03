import Hero from "./Hero";
import SpotList from "./SpotList";
import PopularProducts from "./PopularProducts";
import { useSelector } from "react-redux";


const HomePage = () => {    

  const currentPage = useSelector((state) => state.pages.home);
  const productsPage = useSelector((state) => state.pages.products);

  const productsPageArray = Object.values(productsPage);

  const popularProducts = currentPage.popularProducts.map((id) => {
    return productsPageArray.find((product) => product.id === id);
  });

  const { hero, spotList } = currentPage;

    return (
      currentPage ? (
        <div>
        <Hero {...hero} />
        <SpotList spotList={spotList}/>
        <PopularProducts popularProducts={popularProducts}/>
      </div>
      ) : <h1>No Data</h1>
    ); 
};

export default HomePage;