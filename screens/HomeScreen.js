import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect  } from 'react';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export function HomeScreen( props ){
	const navigation = useNavigation()
	
	//const Tab = createBottomTabNavigator();

	const pressHandler = () => {
		navigation.navigate("Register")
	}

	useEffect(() => {
		if(!props.authStatus){
			navigation.reset( {index: 0,  routes: [{name: "Login"}]})
		}
		},[props.authStatus])
	


	return (
		<View>
			<Text>Home</Text>
			<TouchableOpacity style={styles.button} onPress={() => pressHandler()}>
				<Text>Go to Register</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "lightblue",
		padding: 10,
	}
})