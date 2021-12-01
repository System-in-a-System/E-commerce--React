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
      <div style={{ backgroundColor: "white" }}>
        <h1>
          {userInfo.firstName} {userInfo.lastName}
        </h1>
        <h4>Orders:</h4>
        {userInfo.orders.map((order) => (
          <div>
            {order.id} {order.name} {order.price}
          </div>
        ))}
        <button onClick={handleClick}>Log out</button>
      </div>
    )
  );
};

export default MyAccountPage;
