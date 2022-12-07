import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {useState, useEffect} from 'react'
import { Button } from 'react-native-web'

export function AddScreen ( props ) {
	const [ data, setData ] = useState([])

    useEffect( () => {
        console.log( props.data )
        setData(props.data)
    })

	//function to add to user list
const addToList = async ( data ) => {
	const path = "users/" + auth.uid + "/list"
	const docRef = await addDoc( collection(FBdb, path),data)
  }

	return (
		<View style={styles.container}>
		<View style={styles.form}>
			<Text>Wine name</Text>
			<TextInput 
				//value={name}
				id="name"
				name="name"
				onChangeText={(txt) => setData({name:txt})}
				style={styles.input} 
				placeholder='name'
			/>

			<Text>Year</Text>
			<TextInput
				//value={year}
				id="year"
				name="year"
				onChangeText={(txt) => setData({year:txt})}
				style={styles.input} 
				placeholder='Year'

			/>
			<Text>Price</Text>
			<TextInput 
				//value={price}
				id="price"
				name="price"
				onChangeText={(txt) => setData({price:txt})}
				style={styles.input}  
				placeholder='Price'
			/>
			<Text>Category</Text>
			<TextInput  	
				//value={category}
				id="category"
				name="category"
				onChangeText={(txt) => setData({category:txt})}
				style={styles.input}  
				placeholder='Category'
			/>
			<Text>Country</Text>
			<TextInput  
				//value={country}
				id="country"
				name="country"
				onChangeText={(txt) => setData({country:txt})}
				style={styles.input} 
				placeholder='Country'
			/>
			<Text>Commenst</Text>
			<TextInput 
				//value={comments}
				id="comments"
				name="comments"
				onChangeText={(txt) => setData({comments:txt})}
				style={styles.input}  
				placeholder='Comments'
			/>
		
			<TouchableOpacity 
				style={ styles.button}
				onPress={ () => addToList(data)}
			>
				<Text style={styles.buttonText}>Add wine list</Text>
			</TouchableOpacity>
		</View>
	</View>

	)
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#EEDBCD',
		height:'100%',
	},
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
		fontSize:18,
		color:'white',	
		fontWeight:'bold',
	},
})
