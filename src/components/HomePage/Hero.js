const Hero = () => {
    return (
      <div className="h-container hero">
        <div className="v-container intro">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            aspernatur, libero iure deserunt autem quia eaque assumenda nulla
            earum minus aliquam, vero animi sunt voluptate quod provident cumque
            commodi officia.
          </p>
          <button onclick="alert('Gotcha!')">Click me!</button>
        </div>

        <img
          src="https://img4.goodfon.ru/original/3200x1800/a/81/natali-portman-natalie-portman-aktrisa-model-briunetka-kraso.jpg"
          alt="fashion"
        />
      </div>
    );
};

export default Hero;