import { Link } from "react-router-dom";

const PopularProducts = ({ popularProducts }) => {
  return (
    popularProducts && (
      <div className="popular-products-section">
        <h1 style={{ textAlign: "center" }}>Våra produkter</h1>
        <div className="grid-container">
          {popularProducts.map((product) => (
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
