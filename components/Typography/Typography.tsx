import React from "react";
import MuiTypography from "@mui/material/Typography";

type TypographyProps = {
  variant?: "h1" | "h2" | "subtitle1" | "body1";
  children: String;
  sx?: {};
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  sx,
  children,
}) => {
  return (
    <MuiTypography variant={variant} sx={sx}>
      {children}{" "}
    </MuiTypography>
  );
};
