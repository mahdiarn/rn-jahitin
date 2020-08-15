import AsyncStorage from '@react-native-community/async-storage';

export default async function storeToken(token: string) {
  try {
    await AsyncStorage.setItem('@token', token)
  } catch (e) {
    // saving error
  }
}
