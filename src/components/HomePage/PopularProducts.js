import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    products && (
      <div className="popular-products-section">
        <h1 style={{textAlign: "center"}}>Våra produkter</h1>
        <div className="grid-container">
          {products.map((product) => (
            <div className="v-container product-container">
              <Link to={`/products/${product.urlSlug}`}>
                <img
                  className="mini-featured-img"
                  alt="product"
                  src={product.imageUrl}
                />
                <div className="h-container">
                    <h3>{product.name}</h3>
                    <h3>{product.price} SEK</h3>
                </div>               
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default PopularProducts;
