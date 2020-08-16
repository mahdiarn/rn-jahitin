import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Button } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ListOfTailorScreen from '../screens/ListOfTailorScreen';
import ListOfOrderScreen from '../screens/ListOfOrderScreen';
import NewUserScreen from '../screens/NewUserScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchVendorScreen from '../screens/SearchVendorScreen';
import ChooseVendorScreen from '../screens/ChooseVendorScreen';
import OrderScreen from '../screens/OrderScreen';
import ProcessScreen from '../screens/ProcessScreen';
import HistoryOrderScreen from '../screens/HistoryOrderScreen';

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
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="NewUser" component={NewUserScreen} options={{ title: '', headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{
        title: 'Login',
        headerTitle: '',
        headerBackTitle: '\n',
      }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{
        title: 'Register',
        headerTitle: '',
        headerBackTitle: '\n',
      }}/>
      <Stack.Screen name="ListOfTailor" component={ListOfTailorScreen} options={{headerShown: false}} />
      <Stack.Screen name="ListOfOrder" component={ListOfOrderScreen} />
      <Stack.Screen name="SearchVendor" component={SearchVendorScreen} options={{
        title: 'Search Vendor',
      }}/>
      <Stack.Screen name="ChooseVendor" component={ChooseVendorScreen} options={{
        title: 'Choose Vendor',
      }}/>
      <Stack.Screen name="Order" component={OrderScreen} options={{
        title: 'Order',
      }}/>
      <Stack.Screen name="Process" component={ProcessScreen} options={{
        title: 'Process',
      }}/>
      <Stack.Screen name="History" component={HistoryOrderScreen} options={{
        title: 'History',
      }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
