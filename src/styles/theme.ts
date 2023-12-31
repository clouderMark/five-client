import {createTheme, PaletteColorOptions, PaletteColor, lighten} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    first?: PaletteColorOptions;
    second?: PaletteColorOptions;
    third?: PaletteColorOptions;
    fourth?: PaletteColorOptions;
  }

  interface Palette {
    first: PaletteColor;
    second: PaletteColor;
    third: PaletteColor;
    fourth: PaletteColor;
  }

  interface ButtonPropsColorOverrides {
    first: true;
    second: true;
    third: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    first: true;
    second: true;
    third: true;
    fourth: true;
  }
}

const globalTheme = createTheme({
  palette: {
    first: {
      main: '#3a5795',
      dark: '#333333',
    },
    second: {
      main: '#637bad',
    },
    third: {
      main: '#edf0f5',
      light: '#808080',
      dark: '#6A6C71',
    },
    fourth: {
      main: '#6f6f6f',
      light: lighten('#6f6f6f', 0.3),
    },
  },
});

export const theme = createTheme({
  palette: {
    first: {
      main: globalTheme.palette.first.main,
      dark: globalTheme.palette.first.dark,
    },
    second: {
      main: globalTheme.palette.second.main,
    },
    third: {
      main: globalTheme.palette.third.main,
      light: globalTheme.palette.third.light,
    },
  },
  typography: {
    allVariants: {
      color: globalTheme.palette.first.dark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '54px',
          padding: '25px',
          borderRadius: 0,
          color: globalTheme.palette.third.main,
          fontWeight: 400,
          fontSize: '1.125rem',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'trasparent',
            color: 'inherit',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          maxWidth: '1400px',
          boxShadow: 'none',
          position: 'sticky',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          px: 5,
          backgroundColor: globalTheme.palette.first.dark,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1448px',
        },
      },
    },
  },
});
