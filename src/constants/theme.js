import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const window = Dimensions.get('window');
const topBar = Constants.statusBarHeight;

const colors = {
  accent: '#FFCE0F',
  primary: '#FFCE0F',
  secondary: '#32945B',
  tertiary: '#007F46',
  fouriary: '#84AB35',
  black: '#1C202E',
  white: '#FFFFFF',
  gray: '#9DA3B4',
  gray2: '#C5CCD6',
  gray3: '#AEB1B8',
  gray4: '#f2f2f2',
  darkGray: '#767676',
  endGradient: '#FF1E1E',
  green: '#007F46',
  green2: '#32945B',
  green3: '#84AB3C'
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 20,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 19,
  h3: 18,
  title: 18,
  header: 16,
  body: 13,
  caption: 12,
};

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  },
};

export { colors, sizes, fonts, window, topBar };
