import React from "react";
import MuiButton from "@mui/material/Button";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "success" | "error";
  children: String;
};

export const Button: React.FC<ButtonProps> = ({ variant, color, children }) => {
  return (
    <MuiButton data-testid={"CoreButton"} variant={variant} color={color}>
      {children}
    </MuiButton>
  );
};
