import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../theme-context";

export const Button = ({
  children,
  disabled,
  onClick,
  colorViewVariant = "default",
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.button, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </button>
  );
};
