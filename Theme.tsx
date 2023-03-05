import { extendTheme } from 'native-base';

const Theme = extendTheme({
  colors: {
    primary: {
      '50': '#e8f2ff',
      '100': '#cbd4ea',
      '200': '#aab7d7',
      '300': '#889bc3',
      '400': '#687eb1',
      '500': '#4e6597',
      '600': '#3c4e77',
      '700': '#293856',
      '800': '#172236',
      '900': '#050b19',
    },
    secondary: {
      '50': '#178152116',
      '100': '#15313b113',
      '200': '#13112310d',
      '300': '#11110d105',
      '400': '#f3f6fb',
      '500': '#e3eaf4',
      '600': '#d4ddec',
      '700': '#c6d1e2',
      '800': '#bac5d7',
      '900': '#afb9ca',
    },
    tertiary: {
      '50': '#98d7dd',
      '100': '#80c7ce',
      '200': '#6ab5bc',
      '300': '#56a1a8',
      '400': '#49878d',
      '500': '#477478',
      '600': '#436164',
      '700': '#3e5052',
      '800': '#374041',
      '900': '#2f3131',
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md',
      },
      defaultProps: {
        size: 'md',
        bg: 'tertiary.400',
      },
    },
    Text: {
      defaultProps: {
        color: 'secondary.400',
      },
    },
  },
});

export default Theme;
