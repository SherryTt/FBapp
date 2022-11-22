import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'

export function LoginScreen( props ){
	const navigation = useNavigation()

	return (
		<View style={ styles.homeScreen }>
			<View style={styles.form}>
				<Text style={ styles.title}>Sign in</Text>
			<Text>Email</Text>
			<TextInput style={ styles.input}/>
			<Text>Password</Text>
			<TextInput style={ styles.input} secureTextEntry={true} />
			<TouchableOpacity style={ styles.button}>
				<Text style={styles.buttonText}>Sign up</Text>
			</TouchableOpacity>
			<TouchableOpacity style={ styles.loginLink}>
				<Text style={ styles.loginLinkText}>Already have an account? Sign in</Text>
			</TouchableOpacity>
			</View>
		</View>

	)
}

const styles = StyleSheet.create({
	homeScreen: {
		backgroundColor: "lightyellow",
		flex: 1,
		display: "flex",
		flexDirection: "column",
	},
	form:{
		backgroundColor: "white",
		padding: 10,
		marginTop: 30,
		marginHorizontal: 20,
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
	},
	input: {
		borderStyle: "solid",
		borderColor: "#cccccc",
		borderWidth: 1,
		padding: 5,
		marginVertical: 5,
	},
	button: {
		padding: 5,
		backgroundColor: "black",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	loginLink: {
		marginVertical: 20,
	},
	loginLinkText: {
		textAlign: "center",
	},
})
