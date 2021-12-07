import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userNameFound = localStorage.getItem(userName);

    if (userNameFound) {
      const user = JSON.parse(localStorage.getItem(userName));
      const correctPassword = user.password;

      if (password === correctPassword) {
        localStorage.setItem("logged", JSON.stringify(user));
        navigate("/myAccount");

      } else {
        setStatusMessage("Fel lösenord");
        setUsername("");
        setPassword("");
      }
    } else {
      setStatusMessage("Fel användarnamn");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="form-container">
      <h1>Logga in</h1>
      <form className="v-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">E-Post </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userName">Lösenord </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginRight: "3%" }}>
          Logga in
        </button>

        <div style={{ color: "red" }}>{statusMessage}</div>

        <div style={{ marginTop: "2px" }}>
          <Link to="/register">Skapa ett konto</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
