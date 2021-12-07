import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  let { urlSlug } = useParams();
  const currentProduct = useSelector((state) => state.pages.products[urlSlug]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || { content: [] };

    const productToPutInCart = {
      id: currentProduct.id,
      name: currentProduct.name,
      imageUrl: currentProduct.imageUrl,
      price: currentProduct.price,
      quantity: 1,
    };

    const productAlreadyInCart = cart.content.find(contentproduct => 
      contentproduct.id === productToPutInCart.id);

    if (productAlreadyInCart) {
      const updatedContent = cart.content.map((contentproduct) => {
        if (contentproduct.id === productToPutInCart.id) contentproduct.quantity++;
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

  return currentProduct ? (
    <div className="h-container product-details-container">
      <div className="product-details-img-container">
        <img
          className="product-img"
          alt="product"
          src={currentProduct.imageUrl}
        />
      </div>
      <div className="v-container product-details-text-container">
        <h1>{currentProduct.name}</h1>
        <p>{currentProduct.description}</p>
        <p>Pris: {currentProduct.price} SEK</p>
        <button onClick={handleClick}>Lägg i varukorgen</button>
      </div>
    </div>
  ) : (
    <h1>Product Not Found</h1>
  );
};

export default ProductDetailsPage;
