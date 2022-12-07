import { View, Text, StyleSheet,Image, TextInput ,TouchableOpacity} from 'react-native'
import {useState, useEffect} from 'react'


export function AccountScreen ( props ) {

const [ user, setUser ] = useState([])

useEffect( () => {
	if( !user){
		return
	  }
	console.log( props.userData )
	setUser(props.userData)
})


return (
<View style={styles.container}>
	 <View>
		<Image
			style={{width:90, height: 150}}
						source= {{uri:user.userPhoto}}
					/>
		<Text>{user.name}</Text>
		<Text>{user.email}</Text>
	</View>
</View>
)
}

const styles = StyleSheet.create({
container:{
  backgroundColor:'#EEDBCD',
  height:'100%',
},
})

