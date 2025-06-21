import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`${styles.detailedBtn} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
