const SpotList = ({ spotList }) => {
  return (
    spotList && (
      <div className="h-container">
        {spotList.map((spot) => (
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
              <h3 style={{ position: "absolute", alignSelf: "center", fontSize: "60px" }}>
                {spot.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    )
  );
};

export default SpotList;
