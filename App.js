import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//firebase
import { firebaseConfig  } from './config/Config';
import { initializeApp } from "firebase/app";
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import { HomeScreen } from './screens/HomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { LoginScreen } from './screens/LoginScreen';

const FBapp = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
