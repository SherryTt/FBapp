import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect  } from 'react';
//Navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {ListScreen} from './ListScreen'
import { AddScreen } from './AddScreen';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


export function HomeScreen( props ){
	const navigation = useNavigation()

	const pressHandler = () => {
		navigation.navigate("Register")
	}

	useEffect(() => {
		if(!props.authStatus){
			navigation.reset( {index: 0,  routes: [{name: "Login"}]})
		}
		},[props.authStatus])
	


	return (
	
			<Tab.Navigator>
				<Stack.Screen name="List" component={ ListScreen } listData={ props.data }/>
				<Stack.Screen name="Add" component={ AddScreen } add={ props.add }/>
			</Tab.Navigator>

	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "lightblue",
		padding: 10,
	}
})