import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <label
      className={`${classes.label} ${
        props.labelClassName ? props.labelClassName : ""
      }`}
    >
      {props.label}
      <input
        className={`${classes.input} ${
          props.inputClassName ? props.inputClassName : ""
        }`}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onClick={props.onClick}
      />
    </label>
  );
};

export default Input;
