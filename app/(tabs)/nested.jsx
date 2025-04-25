import { useRouter } from 'expo-router';
import {Text, Button} from 'react-native'

const Nested = () => {
  const router = useRouter();
  return (
    <>
      <Text>Nested</Text>
      <Button title='to another' onPress={() => router.replace('another')}>
        <Text>to Another</Text>
      </Button>
    </>
  )
}

export default Nested;