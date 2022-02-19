import React from "react";
import { StyledButton } from "./Button.styles";

type StyledButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "info" | "success" | "error";
  fullWidth?: boolean;
  children: String;
};

export const Button: React.FC<StyledButtonProps> = ({
  variant,
  color,
  fullWidth,
  children,
}) => {
  return (
    <StyledButton
      data-testid={"CoreButton"}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};
