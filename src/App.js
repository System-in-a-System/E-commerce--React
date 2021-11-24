import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
            <a href="/">
              <i className="material-icons">home</i>
            </a>
            <a href="/">
              <i className="material-icons">shopping_cart</i>
            </a>
            <a href="/">
              <i className="material-icons">login</i>
            </a>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<SearchResultPage />} />
          <Route path="/products/:urlSlug" element={<ProductDetailsPage />} />
        </Routes>
      </main>

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

      <footer>
        <small>Copyright 2020 FreakyFashion</small>
      </footer>
    </div>
  );
};

export default App;
