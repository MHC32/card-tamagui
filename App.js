import React from 'react';
import { TamaguiProvider, Button, Card, styled, YStack, Text } from 'tamagui';
import {Image} from 'react-native'
import  config  from './tamagui.config';
import { tokens } from './tamagui.config';
import { Asset, useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import HeartLogo from './assets/svg/Vector.svg'

export default function App() {

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
            <Image source={require('./assets/pexels.png')} style={{width: '100%', height:'100%', borderRadius:12}}/>
            <YStack w='15%' h='15%'  position='relative' top='-220' left='230'>
              <YStack w='15%' h='15%'  position='relative' top='-220' left='230'>
                <HeartLogo width={120} height={120} fill="white" />
              </YStack>
            </YStack>
         </YStack>
       </YStack>
      </YStack>
    </TamaguiProvider>
  );
}