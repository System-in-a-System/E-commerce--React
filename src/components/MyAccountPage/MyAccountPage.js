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
      <div
        style={{
          backgroundColor: "white",
          margin: "1%",
          padding: "1%",
          paddingBottom: "10%",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "3%" }}>
          {userInfo.firstName} {userInfo.lastName}
        </h1>
        <h3>Orders:</h3>
        <hr />
        <div
          className="h-container"
          style={{ margin: "1%", padding: "1%", fontWeight: "bold" }}
        >
          <div className="h-container" style={{ width: "30%" }}>
            <div>Order No</div>
            <div>Datum</div>
          </div>
          <div>Totalt</div>
        </div>

        {userInfo.orders.map((order) => (
          <div className="h-container" style={{ margin: "1%", padding: "1%", border: "1px solid black"}}>
            <div className="h-container" style={{ width: "30%" }}>
              <div>{order.orderNumber}</div>
              <div>{order.date}</div>
            </div>
            <div>{order.totalPrice} SEK</div>
          </div>
        ))}
        <button style={{float: "right", margin: "1%"}} onClick={handleClick}>Log out</button>
      </div>
    )
  );
};

export default MyAccountPage;
