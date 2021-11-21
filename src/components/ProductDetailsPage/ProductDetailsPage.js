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

    return product && (
        <h1>Here comes product details for {product.name}</h1>
    );
    
};

export default ProductDetailsPage;