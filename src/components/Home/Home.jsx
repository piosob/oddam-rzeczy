import {
  HomeHeader,
  HomeMain,
  HomeThreeColumns,
  HomeFourSteps,
  HomeAbout,
  HomeWhoWeHelp,
  HomeContact,
} from "./index";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.container}>
      <HomeHeader />
      <HomeMain />
      <HomeThreeColumns />
      <HomeFourSteps />
      <HomeAbout />
      <HomeWhoWeHelp />
      <HomeContact />
    </div>
  );
};
