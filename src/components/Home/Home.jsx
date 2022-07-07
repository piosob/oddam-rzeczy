import HomeHeader from "./HomeHeader/HomeHeader";
import classes from "./Home.module.scss";
import HomeMain from "./HomeMain/HomeMain";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
export const Home = () => {
  return (
    <div className={classes.container}>
      <HomeHeader />
      <HomeMain />
      <HomeThreeColumns />
    </div>
  );
};
