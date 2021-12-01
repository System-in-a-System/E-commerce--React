import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState([]);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = localStorage.getItem(email);
    if (userFound) {
      setUserAlreadyExists(true);
    } else {
      setUserAlreadyExists(false);
      const userInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        orders: orders,
      };
      localStorage.setItem(email, JSON.stringify(userInfo));
      alert("Thank you for registration!")
      navigate("/login");
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <form onSubmit={handleSubmit}>
        <div className="col-6 mb3">
          <label htmlFor="firstName">Förnamn</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-6 mb3">
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-6 mb3">
          <label htmlFor="email">E-post</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-6 mb3">
          <label htmlFor="password">Lösenord</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>

        {userAlreadyExists && (
          <div style={{ color: "red" }}>
            User already exists
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
