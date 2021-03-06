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
        {searchResult.result?.map((x, i) => (
          <Link to={`/products/${x.urlSlug}`}>
            <div key={i} className="h-container search-result-container">
              <img
                src={x.imageUrl}
                alt="product"
              />
              <div className="v-container justify-between">
                <div>
                  <h3>{x.name}</h3>
                  <p>{x.description}</p>
                </div>
                <div>
                  <p>{x.price} SEK</p>
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
