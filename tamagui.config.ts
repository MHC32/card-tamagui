import {createFont, createTamagui, createTokens} from 'tamagui'



const interFont = createFont({
    family: 'Urbanist, Helvetica, Arial, Sans-serif',
    size: {
      1 : 18,
      2 :  20,
      3 :  22,
      4 :  24,
      true: 18
    },

    lineHeight: {
        1: 22,
        true: 22
    },

    weight: {
        1: 400,
        2: 600,
        3: 900,
        true: 400,
    },
})

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

  export const tokens = createTokens({
    size,
    radius,
    zIndex,
    space: {small:8, medium:12, large:16, true: 12},
    color: {
      white: '#FFFFFF',
      black: '#383838',
      green: '#87DD3B',
      gray: '#AEAEAE',

    },
  })

  const config = createTamagui({
    tokens,
  
    fonts:{
      heading: interFont,
      body: interFont,
    },
  
     themes: {
        light: {
          bg:  tokens.color.white,
          color: tokens.color.gray,
        },
        dark: {
          bg: tokens.color.black,
          color: tokens.color.gray,
        },
       
      },
    
      shorthands: {
        px: 'paddingHorizontal',
        f: 'flex',
        m: 'margin',
        w: 'width',
        ai: 'alignItems',
        bg: 'backgroundColor',
        br: 'borderRadius',
        h: 'height',
        jc: 'justifyContent',
        p: 'padding'
      } as const,
  })

  type AppConfig = typeof config


  declare module 'tamagui'{
    interface tamaguiCustomConfig extends AppConfig {}


    interface typeOverride {
        groupNames(): 'a' | 'b' | 'c'
    }
  }

  export default config