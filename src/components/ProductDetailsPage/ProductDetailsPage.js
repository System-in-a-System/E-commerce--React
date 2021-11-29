import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetailsPage = () => {

    const { urlSlug } = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        
        fetch(`http://localhost:5000/api/products/${urlSlug}`)
            .then(resp => resp.json())
            .then(product => setProduct(product));
    }, [urlSlug]);

    const handleClick = (e) => {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || {content: []};
      cart.content.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    return (
      product && (
        <div className="h-container product-details-container">
          <div className="product-details-img-container">
            <img className="product-img" alt="product" src={product.imageUrl} />
          </div>
          <div className="v-container product-details-text-container">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Pris: 99 SEK</p>
            <button onClick={handleClick}>Lägg i varukorgen</button>
          </div>
        </div>
      )
    );
    
};

export default ProductDetailsPage;