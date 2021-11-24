const Hero = ({ heading, message, imageUrl, buttonTitle, buttonLink}) => {
    return (
      <div className="h-container hero">
        <div className="v-container intro">
          <h1>{heading}</h1>
          <p>{message}</p>
          <a href={buttonLink}><button>{buttonTitle}</button></a>
        </div>
        <img
          src={imageUrl}
          alt="fashion"
        />
      </div>
    );
};

export default Hero;