import { createTheme } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const { palette } = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[800],
    },
    manoSpalva: palette.augmentColor({
      color: {
        main: '#9900cc',
      },
    }),
  },
});

export default theme;
