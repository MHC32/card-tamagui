import { StatusBar } from 'expo-status-bar';
import {YStack, Text} from 'tamagui'
import config from './tamagui.config'
import {tokens} from './tamagui.config'
import {useFonts} from 'expo-font'

export default function App() {
  const [loaded]= useFonts({
    Urbanist: require('./assets/fonts/Urbanist-Light.ttf'),
    UrbanistBold: require('./assets/fonts/Urbanist-Bold.ttf')
  })
  return (
    <YStack w='100%' h='100%' bg={tokens.color.white} jc='center' ai='center' >
      <Text>Hello from App.tsx</Text>
    </YStack>
  );
}

