import LoginSection from "./LoginSection";
import Navigation from "./Navigation";
import classes from "./HomeHeader.module.scss";

const HomeHeader = () => {
  return (
    <div className={classes.homeHeader}>
      <LoginSection />
      <Navigation />
    </div>
  );
};

export default HomeHeader;
