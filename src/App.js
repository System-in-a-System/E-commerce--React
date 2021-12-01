import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MyAccountPage from "./components/MyAccountPage/MyAccountPage";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import MainMenu from "./components/HomePage/MainMenu";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const userIsLoggedIn = localStorage.getItem("logged");
  const shoppingCartIsActivated = sessionStorage.getItem("cart");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div>
      <header className="h-container">
        <div className="left-corner-container">
          <div className="logo-container">
            <img src="logo.jpg" alt="logo" />
          </div>
          <div>
            <form
              className="v-container search-bar-container"
              onSubmit={handleSubmit}
            >
              <input
                className="search-bar"
                placeholder="Sök..."
                type="search"
                name="q"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="material-icons">search</i>
            </form>
          </div>
        </div>

        <div className="right-corner-container">
          <div>
            <label>Choose a language:</label>
            <select name="languages" id="languages">
              <option value="Swedish">Svenska</option>
              <option value="Danish">Danska</option>
              <option value="Norwegian">Norska</option>
              <option value="English">Engelska</option>
            </select>
          </div>

          <div className="icon-container">
            <Link to="/">
              <i className="material-icons">home</i>
            </Link>
            <Link to="/checkout">
              <i className="material-icons">{shoppingCartIsActivated && <div className="shopping-cart-activated"></div>}shopping_cart</i>
            </Link>
            
            {!userIsLoggedIn && (
              <Link to="/login">
                <i className="material-icons">login</i>
              </Link>
            )}
            {userIsLoggedIn && (
              <Link to="/myAccount">
                <i className="material-icons">account_circle</i>
              </Link>
            )}
          </div>
        </div>
      </header>

      <MainMenu
        items={[
          { id: 1, name: "Hem", href: "/" },
          { id: 2, name: "Rea", href: "/" },
          { id: 3, name: "Kontakt", href: "/" },
        ]}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<SearchResultPage />} />
          <Route path="/products/:urlSlug" element={<ProductDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myAccount" element={<MyAccountPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <footer>
        <div className="h-container icons-line">
          <div className="h-container icon-link-pair">
            <i className="material-icons">swap_horizontal_circle</i>
            <a href="/">
              <p>Gratis frakt och returer</p>
            </a>
          </div>

          <div className="h-container icon-link-pair">
            <i className="material-icons">local_shipping</i>
            <a href="/">
              <p>Express frakt</p>
            </a>
          </div>

          <div className="h-container icon-link-pair">
            <i className="material-icons">attach_money</i>
            <a href="/">
              <p>Säkra betalningar</p>
            </a>
          </div>

          <div className="h-container icon-link-pair">
            <i className="material-icons">map</i>
            <a href="/">
              <p>Nyheter varje dag</p>
            </a>
          </div>
        </div>

        <div className="h-container">
          <div className="left-corner-container bottom-links-container">
            <div className="v-container">
              <h3>Shopping</h3>
              <a href="/">Vinterjackor</a>
              <a href="/">Pufferjackor</a>
              <a href="/">Kappa</a>
              <a href="/">Trenchcoats</a>
            </div>

            <div className="v-container">
              <h3>Mina sidor</h3>
              <a href="/">Mina Ordrar</a>
              <a href="/">Mitt Konto</a>
            </div>

            <div className="v-container">
              <h3>Kundtjänst</h3>
              <a href="/">Returpolicy</a>
              <a href="/">Intergritetspolicy</a>
            </div>
          </div>

          <div className="right-corner-container">
            <div className="v-container" id="bottom-land-language-form">
              <h5>Välj land och språk</h5>
              <label>Land</label>
              <select name="land" id="land">
                <option value="Sweden">Sverige</option>
                <option value="Denmark">Danmark</option>
                <option value="Norway">Norge</option>
                <option value="England">England</option>
              </select>

              <label>Språk</label>
              <select name="lang" id="lang">
                <option value="Swedish">Svenska</option>
                <option value="Danish">Danska</option>
                <option value="Norwegian">Norska</option>
                <option value="English">Engelska</option>
              </select>
            </div>
          </div>
        </div>
        <small>Copyright 2020 FreakyFashion</small>
      </footer>
    </div>
  );
};

export default App;
