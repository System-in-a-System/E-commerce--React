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
      const today = new Date();
      const purchaseDate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const content = products.slice();
      const totalPrice = products.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );

      const order = {
        orderNumber: orderNumber,
        date: purchaseDate,
        content: content,
        totalPrice: totalPrice,
      };

      customer.orders.push(order);

      localStorage.setItem(customer.email, JSON.stringify(customer));
      localStorage.setItem("logged", JSON.stringify(customer));
      alert(
        "Tack för att du handlar hos oss! Vi kommer att kontakta dig inom kort"
      );

      sessionStorage.removeItem("cart");
      navigate("/myAccount");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "1%",
        padding: "1%",
        paddingBottom: "10%",
      }}
    >
      <h1 style={{ textAlign: "center", padding: "3%" }}>Checka ut</h1>

      <div
        className="h-container"
        style={{ margin: "1%", padding: "1%", fontWeight: "bold" }}
      >
        <div style={{ width: "70%" }}>Produkt</div>
        <div className="h-container" style={{ width: "20%" }}>
          <div>Antal</div>
          <div>Totalt</div>
        </div>
      </div>

      {products.map((product) => (
        <div
          className="h-container"
          style={{ margin: "1%", padding: "1%", border: "1px solid black" }}
        >
          <div style={{ width: "70%" }}>{product.name}</div>
          <div className="h-container" style={{ width: "20%" }}>
            <div>{product.quantity}</div>
            <div>{product.price * product.quantity}</div>
          </div>
        </div>
      ))}
      {products.length === 0 && (
        <div style={{ margin: "1%", padding: "1%" }}>
          Korgen är tom. Handla lite först
        </div>
      )}
      {products.length > 0 && (
        <button
          style={{
            marginTop: "2%",
            marginLeft: "41%",
            marginRight: "50%",
            width: "17vw",
          }}
          onClick={handleClick}
        >
          Köp
        </button>
      )}
    </div>
  );
};

export default CheckoutPage;
