import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchResultPage = () => {
  const [urlSearchParams] = useSearchParams();
  const q = urlSearchParams.get("q");

  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/search?q=${q}`)
      .then((resp) => resp.json())
      .then((result) => setSearchResult(result));
  }, [q]);

  return (
    searchResult && (
      <div className="search-results">
        <div className="search-results-count">
          {searchResult.count} träffar på "{q}"
        </div>

        {searchResult.result.map((x) => (
          <Link to={`/products/${x.urlSlug}`}>
            <div className="h-container search-result-container">
              <img
                src="https://images.ru.prom.st/292940953_w640_h640_poshiv-futbolok.jpg"
                alt="product"
              />
              <div className="v-container justify-between">
                <div>
                  <h3>{x.name}</h3>
                  <p>{x.description}</p>
                </div>
                <div>
                  <p>Product price in SEK</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default SearchResultPage;
