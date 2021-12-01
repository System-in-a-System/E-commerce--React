import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  const { urlSlug } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${urlSlug}`)
      .then((resp) => resp.json())
      .then((product) => setProduct(product));
  }, [urlSlug]);

  const handleClick = (e) => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || { content: [] };

    const productToPutInCart = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    };

    const productAlreadyInCart = cart.content.find(contentproduct => contentproduct.id === productToPutInCart.id);

    if (productAlreadyInCart) {
      const updatedContent = cart.content.map((contentproduct) => {
        if (contentproduct.id === productToPutInCart.id) {
          contentproduct.quantity++;
        }
        return contentproduct;
      });
      cart.content = updatedContent;
      sessionStorage.setItem("cart", JSON.stringify(cart));

    } else {
      cart.content.push(productToPutInCart);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    navigate("/checkout");
  };

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
