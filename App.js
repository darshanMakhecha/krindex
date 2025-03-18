import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Onboarding from './src/screens/Onboarding';
import routes from './src/routes';



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.SPLASH} component={Splash} />
        <Stack.Screen name={routes.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={routes.LOGIN} component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
