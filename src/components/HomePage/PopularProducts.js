import { Link } from "react-router-dom";

const PopularProducts = ({ popularProducts }) => {
  return (
    <div className="popular-products-section">
      <h1>Populära Produkter</h1>
      {popularProducts ? (
        <div className="grid-container">
          {popularProducts.map((product, i) => (
            <div key={i} className="v-container product-container">
              <Link to={`/products/${product.urlSlug}`}>
                <img
                  className="mini-product-img"
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
      ) : (
        <div>Inga produkter hittas...</div>
      )}
    </div>
  );
};

export default PopularProducts;
