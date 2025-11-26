import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "Default" | "Outlined";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

function Button({
  children,
  variant = "Default",
  className = "",
  ...props
}: IButtonProps) {
  const variantClassname = { Default: "", Outlined: styles.outlinedBtn };
  return (
    <button
      {...props}
      className={`${styles.detailedBtn} ${variantClassname[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
