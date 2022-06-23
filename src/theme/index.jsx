import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  html: {
    height: '100vh',
    bgColor: 'red',
  },
  fonts: {
    heading: `Roboto, ${base.fonts?.heading}`,
    body: `Roboto, ${base.fonts?.body}`,
  },
  colors: {
    orange: {
      100: '#F6CA65',
    },
    blue: {
      100: '#005B96',
      200: '#1BC5BD',
      300: '#005B96',
      400: '#00628B',
      500: '#011F4B',
    },
    lightBlue: {
      100: '#F1FAFE',
    },
    lightGray: {
      100: '#F3F6F9',
    },
    gray: {
      100: '#7E8299',
    },
  },
});

export default theme;
