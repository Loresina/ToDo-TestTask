import {
  Button as MaterialButton,
  type ButtonProps as MaterialButtonProps,
} from "@mui/material";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps extends MaterialButtonProps {}

const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {
  const { children, className = "" } = props;
  return (
    <MaterialButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
