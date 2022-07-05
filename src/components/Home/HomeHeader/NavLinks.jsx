// import { Link } from "react-scroll";
import classes from "./NavLinks.module.scss";
const Navlinks = () => {
  return (
    <ul className={classes.ul}>
      <li className={classes.active}>Start</li>
      <li>O co chodzi?</li>
      <li>O nas</li>
      <li>Fundacje i organizacje</li>
      <li>Kontakt</li>
    </ul>
  );
};

export default Navlinks;
