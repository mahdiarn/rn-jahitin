import AsyncStorage from '@react-native-community/async-storage';

export default async function getToken() {
  try {
    return await AsyncStorage.getItem('@token')
  } catch (e) {
    // saving error
  }
}
