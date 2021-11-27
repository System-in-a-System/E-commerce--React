import { useState, useEffect } from "react";

const SpotList = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/spots")
      .then((resp) => resp.json())
      .then((spots) => setSpots(spots));
  }, []);

  return (
    spots && (
    <div className="h-container">
      {spots.map((spot) => (
        <a href={spot.href}>
          <div
            className="v-container"
            style={{ position: "relative", justifyContent: "center" }}
          >
            <img
              className="maxi-featured-img"
              src={spot.imageUrl}
              alt="featured product"
            />
            <h3 style={{ position: "absolute", alignSelf: "center" }}>
              {spot.title}
            </h3>
          </div>
        </a>
      ))}
    </div>)
  );
};

export default SpotList;
