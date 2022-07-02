import HomeHeader from "./HomeHeader/HomeHeader";
import classes from "./Home.module.scss";
export const Home = () => {
  return (
    <div className={classes.container}>
      <HomeHeader />
    </div>
  );
};
