import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect  } from 'react';
import { Ionicons } from "@expo/vector-icons";
//Navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {ListScreen} from './ListScreen'
import { AddScreen } from './AddScreen';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


export function HomeScreen( props ){

	const [listData,setListData] = useState()
	const [userData,setUserData] = useState()

	const navigation = useNavigation()

	const pressHandler = () => {
		navigation.navigate("Register")
	}

	useEffect(() => {
		if(!props.authStatus){
			navigation.reset( {index: 0,  routes: [{name: "Login"}]})
		}
		},[props.authStatus])

	
	useEffect( () => {
		setListData( props.list )
	}, [props.list])

	useEffect( () => {
		setUserData( props.users )
	}, [props.users])


	return (
		
		<Tab.Navigator style={styles.tabBar}>
			<Stack.Screen name="List" style={styles.barTitle} options={{
				headerShown:false,
				//tabBarStyle:{backgroundColor:''},
				tabBarIcon:(tabInfo)=>{
					return(
					<Ionicons name='md-wine' size={25}  color={'#185C4D'} />)}

				}}>
        	{ (props) => <ListScreen {...props} data={ listData } /> }
			</Stack.Screen>

			<Stack.Screen name="Add"  style={styles.barTitle}  options={{
				headerShown:false,
				tabBarIcon:(tabInfo)=>{
					return(
					<Ionicons name='md-add' size={25} color={'#185C4D'}/>)}
			}} component={ AddScreen } add={ props.add }/>

			</Tab.Navigator>

	)
}

const styles = StyleSheet.create({
	barTitle:{
		backgroundColor: "red",
	},
	tabBar: {
		backgroundColor: "red",
	  },
})
