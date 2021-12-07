const SpotList = ({ spotList }) => {
  return (
    spotList && (
      <div className="h-container">
        {spotList.map((spot, i) => (
          <a href={spot.href} key={i} className="spotLink">
            <div className="v-container spot-container">
              <img
                className="spot-img"
                src={spot.imageUrl}
                alt="featured product"
              />
              <h3>{spot.title}</h3>
            </div>
          </a>
        ))}
      </div>
    )
  );
};

export default SpotList;
