import { useNavigate } from "react-router";

const MyAccountPage = () => {
  const userIsLoggedIn = localStorage.getItem("logged");
  const userInfo = userIsLoggedIn ? JSON.parse(userIsLoggedIn) : null;

  const navigate = useNavigate();
  if (!userIsLoggedIn) navigate("/login");

  const handleClick = (e) => {
    localStorage.removeItem("logged");
    sessionStorage.removeItem("cart");
    navigate("/");
  };

  return (
    userInfo && (
      <div className="form-container">
        <h1>{userInfo.firstName} {userInfo.lastName}</h1>
        
        <h3>Orders:</h3>
        <hr />

        <div className="h-container" style={{ fontWeight: "bold" }}>
          <div className="h-container" style={{ width: "30%" }}>
            <div>Order No</div>
            <div>Datum</div>
          </div>
          <div>Totalt</div>
        </div>

        {userInfo.orders?.map((order, i) => (
          <div key={i} className="h-container item">
            <div className="h-container" style={{ width: "30%" }}>
              <div>{order.orderNumber}</div>
              <div>{order.date}</div>
            </div>
            <div>{order.totalPrice} SEK</div>
          </div>
        ))}

        <button style={{ float: "right", margin: "1%" }} onClick={handleClick}>
          Logga ut
        </button>
      </div>
    )
  );
};

export default MyAccountPage;
