import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Spots from "./Spots";

const HomePage = () => {
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {     
        
        fetch("http://localhost:5000/api/products")
            .then(resp => resp.json())
            .then(products => setProducts(products));

    }, [])
    
    return (
      <div>
        <Navigation />
        <Hero
          heading="Lorem ipsum dolor"
          message="
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            aspernatur, libero iure deserunt autem quia eaque assumenda nulla
            earum minus aliquam, vero animi sunt voluptate quod provident cumque
            commodi officia."
          imageUrl="https://img4.goodfon.ru/original/3200x1800/a/81/natali-portman-natalie-portman-aktrisa-model-briunetka-kraso.jpg"
          buttonTitle="Click me!"
          buttonLink="https://www.pinterest.com/patsprings/freaky-fashion/"
        />

        <section>
          <h1>Våra produkter</h1>
          <div className="grid-container">
            {products.map((product) => (
              <div className="v-container">
                <Link to={`/products/${product.urlSlug}`}>
                  <img
                    className="mini-featured-img"
                    alt="product"
                    src="https://images.ru.prom.st/292940953_w640_h640_poshiv-futbolok.jpg"
                  />
                  <h2>{product.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Spots />
      </div>
    ); 
};

export default HomePage;