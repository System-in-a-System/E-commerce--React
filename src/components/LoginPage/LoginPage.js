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
      const userInfo = JSON.parse(localStorage.getItem(userName));
      const correctPassword = userInfo.password;

      if (password === correctPassword) {
        localStorage.setItem("logged", JSON.stringify(userInfo));
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
    <div style={{ backgroundColor: "white", margin: "1%", padding: "1%" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px", padding: "1%" }}>
        Logga in
      </h2>
      <form
        onSubmit={handleSubmit}
        className="v-container"
        style={{ width: "30%", alignItems: "self-end" }}
      >
        <div style={{ padding: "1%" }}>
          <label htmlFor="userName">E-Post </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ padding: "1%" }}>
          <label htmlFor="userName">Lösenord </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" style={{ margin: "1%", marginRight: "3%" }}>
          Login
        </button>

        <div style={{ color: "red" }}>{statusMessage}</div>

        <div style={{ marginTop: "2px", margin: "1%", padding: "1%" }}>
          <Link to="/register">Skapa ett konto</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
