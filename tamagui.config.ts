import { createTokens, createTamagui, createFont } from 'tamagui';

const size = {
  small: 16,
  medium: 19,
  large: 22,
  true: 16,
}

const radius = {
  small: 4,
  medium: 8,
  large: 12,
  true: 8,
};

const zIndex = {
  low: 1,
  medium: 10,
  high: 100,
  true: 1,
};

const interFont = createFont({
  size: {
    1: 12,
    2: 14,
    3: 15,
    true: 12,
  },

  lineHeight: {
    2: 22,
    true: 22
  },

  weight: {
    1: 300,
    // 2 will be 300
    3: 600,
    true: 300,
  },

  letterSpacing: {
    1: 0,
    2: -1,
    true: 0
  },

  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
    true: { normal: 'InterLight', italic: 'InterItalic' },
  },
})


export const tokens = createTokens({
  size,
  radius,
  zIndex,
  space: { small: 8, medium: 12, large: 16, true: 12 },
  color: {
    primary: '#3498db',
    secondary: '#2ecc71',
    white: '#FFFFFF',
    black: '#383838',
    green: '#87DD3B',
    gray: '#AEAEAE',
  },
})


const config = createTamagui({
  tokens,

  fonts: {
    heading: interFont,
    body: interFont,
  },

  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },

  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
    ai: 'alignItems',
    as: 'alignSelf',
    bg: 'backgroundColor',
    br: 'borderRadius',
    h: 'height',
    jc: 'justifyContent',
    p: 'padding',
    mt: 'marginTop',
    fw: 'fontWeight',
    fs: 'fontSize',
  } as const,
})

type AppConfig = typeof config


declare module 'tamagui' {
  interface tamaguiCustomConfig extends AppConfig { }


  interface typeOverride {
    groupNames(): 'a' | 'b' | 'c'
  }
}

export default config