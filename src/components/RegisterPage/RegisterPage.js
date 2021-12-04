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
      alert("Tack för din registrering!")
      navigate("/login");
    }
  };

  return (
    <div style={{ backgroundColor: "white", margin: "1%", padding: "1%" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px", padding: "1%"}}>Skapa ett Konto</h2>
      <form onSubmit={handleSubmit} className="v-container" style={{ width: "30%", alignItems:"self-end" }}>
        <div style={{ padding: "1%" }}>
          <label htmlFor="firstName">Förnamn </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={{ padding: "1%" }}>
          <label htmlFor="lastName">Efternamn </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div style={{ padding: "1%" }}>
          <label htmlFor="email">E-post </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ padding: "1%" }}>
          <label htmlFor="password">Lösenord </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={{ margin: "1%", marginRight: "3%" }} type="submit">Register</button>

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
