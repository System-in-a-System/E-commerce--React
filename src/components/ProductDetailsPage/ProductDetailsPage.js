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
    }, []);

    return (
      product && (
        <div className="h-container product-container">
          <div className="product-details-img-container">
            <img className="product-img" alt="product" src={product.imageUrl} />
          </div>
          <div className="v-container product-details-container">
            <h1>{product.name}</h1>
            <p>{product.descritpion}</p>
            <p>Pris: 99 SEK</p>
            <button>Lägg i varukorgen</button>
          </div>
        </div>
      )
    );
    
};

export default ProductDetailsPage;