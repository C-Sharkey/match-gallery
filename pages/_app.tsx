import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { matchGalleryTheme } from "../config/matchGalleryTheme";

// Lets us overide the standard MUI theme
/// Check the matchGalleryTheme to see what is changed
/// https://mui.com/customization/theming/
/// This is the default we are changing: https://mui.com/customization/default-theme/
const muiTheme = createTheme(matchGalleryTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
