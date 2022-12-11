import { View,Text, FlatList, Image, TouchableHighlight, StyleSheet} from "react-native";
import {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Separator } from '../components/Separator';


export function ListScreen( props ) {
	const navigation = useNavigation()

	const [ list, setList ] = useState([])

    useEffect( () => {
        console.log( props.data )
        setList(props.data)
    })

  
const renderRow = ({ item }) => {
	return (	
	    <TouchableHighlight onPress={()=> {navigation.navigate('Detail',item)}}>
		  <View style={styles.list}>
		   <Image 
				style={{width:90, height: 150}}
							source= {{uri:item.photo}}
						/>
			<View style={styles.detailText}>  
			<Text style={styles.titleText}>{item.name} / {item.year} </Text>
			<Text style={styles.titleText}>{item.country}</Text>
			</View>
			</View>
		</TouchableHighlight>
	);}

	return(
		<View style={styles.container}>
			<FlatList 
				data={ list } 
				renderItem={renderRow}
				ItemSeparatorComponent={Separator}
				keyExtractor={item => item.id}/>
		</View>
	)
}

const styles =StyleSheet.create({
	container:{
		backgroundColor:'#EEDBCD',
	},
	list: {
		padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
	  },
	detailText:{
		alignSelf:"center",
	},
	input:{
			borderStyle: "solid",
			backgroundColor: "#ffffff",
			borderColor: "#cccccc",
			borderWidth: 1,
			padding: 5,
			marginVertical: 5,
			marginVertical:10,
	},
	titleText:{
		fontSize:17,
		fontWeight:"bold",
	},
});