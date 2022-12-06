import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'

export function RegisterScreen( props ){
	// state to store the value of email
	const [email, setEmail] = useState('')
	// state to idicate valid email
	const [validEmail, setValidEmail] = useState( false )
	// state to store the value of password
	const [password, setPassword] = useState('')
	// state to indicate valid password
	const [validPassword, setValidPassword] = useState( false )

	const navigation = useNavigation()


	const gotoLogin = () => {
		navigation.navigate("Login")
	}

	const signUpUser = () => {
		props.handler( email, password)
	}

	useEffect( () => {
		if( email.indexOf( '@' > 0 ) && email.length >= 6 ){
			setValidEmail( true )
		}
		else {
			setValidEmail( false )
		}
	}, [email] )

	useEffect( () => {
		if( password.length > 6 ){
			setValidPassword( true )
		}
		else {
			setValidPassword( false )
		}
	}, [ password ] )

	useEffect( () => {
		if( props.authStatus ){
			navigation.reset( {index: 0,  routes: [{name: "Home"}]} )
		}
	}, [ props.authStatus ] )


	return (
		<View style={ styles.homeScreen }>
			<View style={styles.form}>
				<Text style={ styles.title}>Sign up</Text>
			<Text>Email</Text>
			<TextInput 
				style={ styles.input} 
				value={email}
				onChangeText={ (val) => setEmail(val) }
			/>

			<Text>Password</Text>
			<TextInput 
				style={ styles.input} 
				secureTextEntry={true} 
				value={password} 
				onChangeText={ (val) => setPassword(val) }
			/>

			<TouchableOpacity 
				style={ (validEmail && validPassword ) ? styles.button : styles.buttonDisabble}
				disabled={ (validEmail && validPassword ) ? false : true }
				onPress={ () => signUpUser(email, password) }
			>
				<Text style={styles.buttonText}>Sign up</Text>
			</TouchableOpacity>
			<TouchableOpacity style={ styles.loginLink} onPress={ () => gotoLogin() }>
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
	buttonDisabble:{
		padding: 5,
		backgroundColor: "#CCCCCC",
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
