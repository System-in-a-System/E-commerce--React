import Hero from "./Hero";
import SpotList from "./SpotList";
import PopularProducts from "./PopularProducts";

const HomePage = () => {    
    return (
      <div>
        <Hero
          heading="Lorem ipsum dolor"
          message="
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            aspernatur, libero iure deserunt autem quia eaque assumenda nulla
            earum minus aliquam, vero animi sunt voluptate quod provident cumque
            commodi officia."
          imageUrl="https://img4.goodfon.ru/original/3200x1800/a/81/natali-portman-natalie-portman-aktrisa-model-briunetka-kraso.jpg"
          buttonTitle="Click me!"
          buttonLink="https://www.pinterest.com/patsprings/freaky-fashion/"
        />
        <SpotList />
        <PopularProducts />
      </div>
    ); 
};

export default HomePage;