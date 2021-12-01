import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const products = cart.content || [];

  const userIsLoggedIn = localStorage.getItem("logged");

  const navigate = useNavigate();

  const handleClick = (e) => {
    if(userIsLoggedIn) {
      const customer = JSON.parse(userIsLoggedIn);
      products.map(product => customer.orders.push(product));
      localStorage.setItem(customer.email, JSON.stringify(customer));
      localStorage.setItem("logged", JSON.stringify(customer));
      alert("Thank you for your buy. We will contact you");
      sessionStorage.removeItem("cart");
      navigate("/myAccount");
    } else {
      navigate("/login");
    }
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>Checkout</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
      {products.length === 0 && <div>Basket is empty. Do some shopping</div>}
      {products.length > 0 && <button onClick={handleClick}>Köp</button>}
    </div>
  );
};

export default CheckoutPage;
