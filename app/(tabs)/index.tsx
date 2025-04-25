import { Image, StyleSheet, Platform, TextInput, Button, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <Button title='to nested' onPress={() => router.replace('nested')}>
        <Text>to Another</Text>
      </Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  testInput: {
    backgroundColor: '#f3f3f3',
    borderWidth: 1,
    borderColor: '#000',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
