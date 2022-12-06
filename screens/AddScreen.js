import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-web'

export function AddScreen ( props ) {
	return (
		<View style={styles.form}>
			<Text>Wine name</Text>
			<TextInput style={styles.input} placeholder='name'></TextInput>
			<Text>Year</Text>
			<TextInput style={styles.input} placeholder='Year'></TextInput>
			<Text>Price</Text>
			<TextInput  style={styles.input}  placeholder='Price'></TextInput>
			<Text>Category</Text>
			<TextInput  style={styles.input}  placeholder='Category'></TextInput>
			<Text>Country</Text>
			<TextInput  style={styles.input}  placeholder='Country'></TextInput>
			<Text>Commenst</Text>
			<TextInput  style={styles.input}  placeholder='Comments'></TextInput>
		
			<TouchableOpacity 
				style={ styles.button}
				onPress={ () => addToList()}
			>
				<Text style={styles.buttonText}>Add wine list</Text>
			</TouchableOpacity>
		</View>

	)
}

const styles = StyleSheet.create({
	form:{
		marginHorizontal:20,
		marginTop:30,
	},
	input: {
		borderStyle: "solid",
		backgroundColor: "#ffffff",
		borderColor: "#cccccc",
		borderWidth: 1,
		padding: 10,
		marginVertical:5,
	},
	button: {
		padding: 5,
		marginTop:30,
		backgroundColor: "#185C4D",
	},
	buttonText:{
		textAlign:'center',
		fontSize:20,
		color:'white',	
		fontWeight:'bold',
	},
})
