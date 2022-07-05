import HomeHeader from "./HomeHeader/HomeHeader";
import classes from "./Home.module.scss";
import HomeMain from "./HomeMain/HomeMain";
export const Home = () => {
  return (
    <div className={classes.container}>
      <HomeHeader />
      <HomeMain />
    </div>
  );
};
