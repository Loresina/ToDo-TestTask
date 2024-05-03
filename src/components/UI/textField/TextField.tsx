import React from "react";

import { TextField, type TextFieldProps } from "@mui/material";

interface InputTextProps extends TextFieldProps {}

const InputText: React.FC<InputTextProps> = (props) => {
  return <TextField id="outlined-basic" {...props} variant="outlined" />;
};

export default InputText;
