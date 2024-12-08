import React from 'react';
import { TamaguiProvider, Button, Card, styled, YStack, Text } from 'tamagui';
import { Image } from 'react-native'
import config from './tamagui.config';
import { tokens } from './tamagui.config';
import { Asset, useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import HeartLogo from './assets/svg/Vector.svg'

export default function App() {

  return (
    <TamaguiProvider config={config}>
      <YStack
        w='100%'
        h='100%'
        bg='$green'
        jc='center'
        ai='center'
        br='$medium'
      >
        <YStack
          w='330'
          h='430'
          bg='$black'
          br='$large'
          ai='center'
        >
          <YStack w='90%' h='55%' bg={tokens.color.white} marginTop={20} br={tokens.radius.large} >
            <Image source={require('./assets/pexels.png')} style={{ width: '100%', height: '100%', borderRadius: 12 }} />
            <YStack w='15%' h='15%' position='relative' top='-220' left='230'>
              <YStack w='15%' h='15%' position='relative' top='-220' left='230'>
                <HeartLogo width={120} height={120} fill="white" />
              </YStack>
            </YStack>
          </YStack>

          <YStack w='90%' h='20%' paddingTop={10} paddingLeft={5}>
            <Text color={tokens.color.white} fontSize={24} fontWeight={900}>Gralic </Text>
            <Text color={tokens.color.gray} fontSize={20} fontWeight={500} mt='10'>Intense Flavor znd Aroma</Text>
          </YStack>

          <Button w='130' h='53' fontSize={22} fontWeight={900} color={tokens.color.white} bg={tokens.color.green} alignSelf='flex-end' marginRight='15' marginTop='15'>
            Buy now
          </Button>
        </YStack>
      </YStack>
    </TamaguiProvider>
  );
}