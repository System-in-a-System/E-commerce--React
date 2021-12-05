const SpotList = ({ spotList }) => {
  return (
    spotList && (
      <div className="h-container">
        {spotList.map((spot) => (
          <a href={spot.href} className="spotLink">
            <div
              className="v-container"
              style={{ position: "relative", justifyContent: "center", width: "32vw", height: "20vw" }}
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
