import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const userFound = localStorage.getItem(email);
        if(userFound) {
            console.log("User already exists");
        } else {
            const userInfo = {
                firstName: firstName,
                lastName: lastName,
                password: password
            }
            localStorage.setItem(email, JSON.stringify(userInfo));
            navigate("/login");
        }
    }

    return(
        <div style={{backgroundColor: "white"}}>
            <form onSubmit={handleSubmit}>
                <div className="col-6 mb3">
                    <label htmlFor="firstName">
                        Förnamn
                    </label>
                    <input 
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="col-6 mb3">
                    <label htmlFor="lastName">
                        Efternamn
                    </label>
                    <input 
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="col-6 mb3">
                    <label htmlFor="email">
                        E-post
                    </label>
                    <input 
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-6 mb3">
                    <label htmlFor="password">
                        Lösenord
                    </label>
                    <input 
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
