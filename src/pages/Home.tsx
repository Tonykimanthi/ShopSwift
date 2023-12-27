import HomePageCategories from "../layouts/HomePageCategories";
import HomePageMain from "../layouts/HomePageMain";
import ShippingInfo from "../layouts/ShippingInfo";

const Home = () => {
  return (
    <div>
      <HomePageMain />
      <ShippingInfo />
      <HomePageCategories />
    </div>
  );
};

export default Home;
