import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const products = cart.content || [];

  const userIsLoggedIn = localStorage.getItem("logged");

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (userIsLoggedIn) {
      const customer = JSON.parse(userIsLoggedIn);

      const orderNumber = Math.floor(Math.random() * (99999 - 10000) + 10000);
      const purchaseDate = new Date();
      const fullPurchaseDate = purchaseDate.getFullYear() + "-" + (purchaseDate.getMonth() + 1) + "-" + purchaseDate.getDate();
      const content = products.slice();
      const totalPrice = products.reduce((accumulator, item) => accumulator + item.price, 0);

      const order = {
        orderNumber: orderNumber,
        date: fullPurchaseDate,
        content: content,
        totalPrice: totalPrice,
      };

      customer.orders?.push(order);

      localStorage.setItem(customer.email, JSON.stringify(customer));
      localStorage.setItem("logged", JSON.stringify(customer));
      alert("Tack för att du handlar hos oss! Vi kommer att kontakta dig inom kort");

      sessionStorage.removeItem("cart");
      navigate("/myAccount");

    } else {
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <h1>Checka ut</h1>

      <div className="h-container" style={{ fontWeight: "bold" }}>
        <div style={{ width: "70%" }}>Produkt</div>
        <div className="h-container" style={{ width: "20%" }}>
          <div>Antal</div>
          <div>Totalt</div>
        </div>
      </div>

      {products.map((product, i) => (
        <div key={i} className="h-container" style={{ border: "1px solid black" }}>
          <div style={{ width: "70%" }}>{product.name}</div>
          <div className="h-container" style={{ width: "20%" }}>
            <div>{product.quantity}</div>
            <div>{product.price * product.quantity} SEK</div>
          </div>
        </div>
      ))}

      {products.length === 0 && (
        <div>
          Korgen är tom. Handla lite först
        </div>
      )}

      {products.length > 0 && (
        <button onClick={handleClick}>
          Köp
        </button>
      )}
    </div>
  );
};

export default CheckoutPage;
