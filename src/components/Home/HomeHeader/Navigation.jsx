import NavLinks from "./NavLinks";
import classes from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
