import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        console.log("the password is incorrect");
      }
    } else {
      console.log("username not found");
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <form onSubmit={handleSubmit}>
        <div className="col-6 mb3">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="col-6 mb3">
          <label htmlFor="userName">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <Link to="/register">Register an account</Link>
    </div>
  );
};

export default LoginPage;
