import React from 'react';
import { TamaguiProvider, Button, Card, styled, YStack, Text } from 'tamagui';
import {Image} from 'react-native'
import  config  from './tamagui.config';
import { tokens } from './tamagui.config';
import { useFonts } from 'expo-font' 

// Styled Button






export default function App() {
 const [loaded] = useFonts({
   Urbanist: require('./assets/fonts/Urbanist-Medium.ttf'),
   UrbanistBold: require('./assets/fonts/Urbanist-Bold.ttf')
 })

 if (!loaded) {
   return null
 }

  return (
    <TamaguiProvider config={config}>
      <YStack
       w='100%'
       h= '100%'
       bg={tokens.color.green}
       jc='center'
       ai='center'
       br={tokens.radius.medium}
      >
       <YStack
         w='330'
         h='430'
         bg={tokens.color.black}
         br={tokens.radius.large}
         ai='center'
       >
         <YStack w='90%' h='55%' bg={tokens.color.white} marginTop={20} br={tokens.radius.large} >
          
         </YStack>
       </YStack>
      </YStack>
    </TamaguiProvider>
  );
}
