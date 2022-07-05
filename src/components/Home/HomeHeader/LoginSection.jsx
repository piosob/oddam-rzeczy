import classes from "./LoginSection.module.scss";
const LoginSection = () => {
  return (
    <aside className={classes["login-btns-container"]}>
      <button>Zaloguj</button>
      <button className={classes.active}>Załóż konto</button>
    </aside>
  );
};

export default LoginSection;
