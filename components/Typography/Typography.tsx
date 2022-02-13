import React from "react";
import MuiTypography from "@mui/material/Typography";

type TypographyProps = {
  variant?: "h1" | "h2" | "subtitle1" | "body1";
  children: String;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
}) => {
  return <MuiTypography variant={variant}>{children}</MuiTypography>;
};
