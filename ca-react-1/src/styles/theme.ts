import { createTheme } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const baseTheme = createTheme({
  common: {
    drawerWidth: 240,
  },
});

const {
  palette, transitions, common, breakpoints, spacing,
} = baseTheme;

const theme = createTheme(baseTheme, {
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

  mixins: {
    drawer: {
      openedMixin: {
        width: common.drawerWidth,
        transition: transitions.create('width', {
          easing: transitions.easing.sharp,
          duration: transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      },
      closedMixin: {
        transition: transitions.create('width', {
          easing: transitions.easing.sharp,
          duration: transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${spacing(7)} + 1px)`,
        [breakpoints.up('sm')]: {
          width: `calc(${spacing(8)} + 1px)`,
        },
      },
    },
  },
});

export default theme;
