import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { homeHeroDecoration } from "../../../assets/img";
import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section className={classes.container}>
      <h3 className={classes.heading}>Skontaktuj się z nami</h3>
      <img src={homeHeroDecoration} alt="decoration" />
      <form className={classes.form}>
        <div className={classes.nameEmailInputArea}>
          <Input label="Wpisz swoje imię" placeholder="Krzysztof" />
          <Input label="Wpisz swój email" placeholder="abc@xyz.pl" />
        </div>
        <label className={classes["label-text-area"]}>
          Wpisz swoją wiadomość
          <textarea
            className={classes["text-area"]}
            rows="5"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </label>
        <Button className={classes["submit-button"]} type="submit">
          Wyślij!
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
