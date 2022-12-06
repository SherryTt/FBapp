import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import NativeAccessibilityManager from 'react-native/Libraries/Components/AccessibilityInfo/NativeAccessibilityManager'

export function LoginScreen( props ){
	const [email, setEmail] = useState('')
	const [validEmail, setValidEmail] = useState(false)
	const [password, setPassword] = useState('')
	const [validPassword, setValidPassword] = useState( false )

	const navigation = useNavigation()

	const gotoRegister = () => {
		navigation.navigate("Register")
	}

	const signInUser = ( email, password ) => {
		props.handler(email,password)
	}

	useEffect(() => {
		if(email.length > 5){
			setValidEmail( true )
		}
		else{
			setValidEmail( false )
		}
	},[email])

	useEffect(() => {
	   if (password.length >= 6 ){
		   setValidPassword( true )
	   }
	   else{
		   setValidPassword( false )
	   }
	},[password])

	useEffect( () => {
		if( props.authStatus ){
			navigation.reset( {index: 0,  routes: [{name: "Home"}]} )
		}
	}, [ props.authStatus ] )


	return (
		<View style={ styles.homeScreen }>
			<View style={styles.form}>
			<Text style={ styles.title}>Sign in</Text>
			<Text>Email</Text>
			<TextInput 
				style={ styles.input}
				value={ email }
				onChangeText = {(val) => setEmail(val) }	
			/>
			<Text>Password</Text>
			<TextInput 
				style={ styles.input} 
				secureTextEntry={true} 
				value={ password }
				onChangeText={(val) => setPassword(val) }
			
			/>
			<TouchableOpacity 
				style={ (validEmail && validPassword ) ? styles.button : styles.buttonDisabble}
				onPress={ () => signInUser(email,password)}
			>
				<Text style={styles.buttonText}>Sign in</Text>
			</TouchableOpacity>
			<TouchableOpacity style={ styles.registerLink} onPress={ () => gotoRegister() }>
				<Text style={ styles.registerLinkText}>Don't have an account? Sign up</Text>
			</TouchableOpacity>
			</View>
			<Image style={styles.wineLogo}
                    source={require("../assets/logo_trans.png")}
                     />
		</View>

	)
}

const styles = StyleSheet.create({
	homeScreen: {
		backgroundColor: "#EEDBCD",
		flex: 1,
		display: "flex",
		flexDirection: "column",
	},
	wineLogo:{
		width:200,
		height:200,
		marginHorizontal: 90,
	},
	form:{
		padding: 10,
		marginHorizontal: 20,
		marginTop:100,
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
		textAlign:'center',
		marginBottom:40,
		fontWeight:'bold',
		textDecorationLine:1,
	
	},
	input: {
		borderStyle: "solid",
		backgroundColor: "#ffffff",
		borderColor: "#cccccc",
		borderWidth: 1,
		padding: 5,
		marginVertical: 5,
		marginVertical:10,
	},
	button: {
		padding: 5,
		marginTop:30,
		backgroundColor: "#185C4D",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	buttonDisabble:{
		padding: 5,
		marginTop:30,
		backgroundColor: "#CCCCCC",
	},
	registerLink: {
		marginVertical: 20,
	},
	registerLinkText: {
		textAlign: "center",
	},
})
