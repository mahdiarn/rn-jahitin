import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Button } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import MainScreen from '../screens/MainScreen';
import ListOfOrderScreen from '../screens/ListOfOrderScreen';
import NewUserScreen from '../screens/NewUserScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="ListOfOrder" component={ListOfOrderScreen} />
      <Stack.Screen name="NewUser" component={NewUserScreen} options={{ title: 'NewUser' }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{
        title: 'Login',
        headerLeft: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
          />
        ),
      }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{
        title: 'Register',
        headerLeft: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
          />
        ),
      }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
