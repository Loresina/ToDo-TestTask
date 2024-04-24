import {
  Typography as MaterialTypography,
  type TypographyProps as MaterialTypographyProps,
} from "@mui/material";
import cn from "classnames";

import styles from "./TypographyHeader.module.css";

interface TypographyHeaderProps extends MaterialTypographyProps {}

const TypographyHeader: React.FC<TypographyHeaderProps> = (
  props,
): React.JSX.Element => {
  const { children, className = "" } = props;
  return (
    <MaterialTypography
      variant="h1"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  );
};

export default TypographyHeader;
