import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState([]);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [dataIsValid, setDataIsValid] = useState(true);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = localStorage.getItem(email);

    if (userFound) {
      setUserAlreadyExists(true);

    } else {
      setUserAlreadyExists(false);
      setOrders([]);

      if(firstName === "" || 
         lastName === "" || 
         email === "" || 
         password === "") {
        setDataIsValid(false);
        return;
      }

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
    <div className="form-container">
      <h1>Skapa ett Konto</h1>
      <form className="v-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Förnamn </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Efternamn </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-post </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Lösenord </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={{ marginRight: "3%" }} type="submit">
          Registrera
        </button>

        {!dataIsValid && (
          <div style={{ color: "red" }}>
           Vänligen fyll i alla fält
          </div>
        )}

        {userAlreadyExists && (
          <div style={{ color: "red" }}>
            Användaren redan finns
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
