import Button from "../../UI/Button/Button";
import classes from "./LoginSection.module.scss";

const LoginSection = () => {
  return (
    <aside className={classes["login-btns-container"]}>
      <Button className={classes["non-active"]}>Zaloguj</Button>
      <Button className={classes.active}>Załóż konto</Button>
    </aside>
  );
};

export default LoginSection;
