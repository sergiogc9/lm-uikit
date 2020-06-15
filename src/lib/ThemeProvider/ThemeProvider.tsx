import React from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

type PaletteColor = {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

type Palette = {
  primary?: PaletteColor
  secondary?: PaletteColor
  error?: PaletteColor
  warning?: PaletteColor
  info?: PaletteColor
  success?: PaletteColor
}

type Typography = {
  htmlFontSize: number
}

type ComponentProps = {
  children: React.ReactNode
  palette?: Palette
  typography?: Typography
}

const defaultPrimaryPalette: PaletteColor = {
  main: '#3AD4A7',
  light: '#5FE0B7',
  dark: '#00C795'
};

export const ThemeContext = React.createContext<Palette>({ primary: defaultPrimaryPalette });

// If no primary passed, set LM color by default
const getDefaultPalette = (palette: Palette): Palette => ({ ...palette, primary: palette.primary || defaultPrimaryPalette });

const ThemeProvider: React.FC<ComponentProps> = props => {

  const [palette, setPalette] = React.useState(getDefaultPalette(props.palette || {}));
  // Theme based on MUI library, probably should be a good idea use a custom theme type
  const [theme, setTheme] = React.useState(createMuiTheme({ palette, typography: props.typography }));

  React.useEffect(() => {
    // Material UI theme stuff
    // See options here https://material-ui.com/es/customization/palette/
    // Only main values are mandatory, the other values are auto-calculated
    const theme = createMuiTheme({ palette: getDefaultPalette(props.palette || {}), typography: props.typography });
    setTheme(theme);

    // Set css variables
    document.documentElement.style.setProperty("--lm-ui-primary", theme.palette.primary.main);
    document.documentElement.style.setProperty("--lm-ui-primary-dark", theme.palette.primary.dark);
    document.documentElement.style.setProperty("--lm-ui-primary-light", theme.palette.primary.light);
  }, [props.palette, props.typography]);

  // Update final palette with auto-calculated values
  React.useEffect(() => {
    setPalette(palette => ({
      ...palette,
      // Fill primary values
      primary: theme.palette.primary
    }));
  }, [theme]);


  return (
    <ThemeContext.Provider value={palette}>
      <MuiThemeProvider theme={theme}>
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default React.memo(ThemeProvider);
