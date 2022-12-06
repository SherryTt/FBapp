import { View, Text, StyleSheet,Image } from 'react-native'
import {useState, useEffect} from 'react'

export function AccountScreen ( props ) {

	const [ user, setUser ] = useState([])

    useEffect( () => {
        console.log( props.userData )
        setUser(props.userData)
    })

	const renderer = ({user}) => (
        <View>
			<Image
				style={{width:90, height: 150}}
							source= {{uri:user.userPhoto}}
						/>
            <Text>{user.name}</Text>
	
        </View>
    ) 

	return (
		<View renderer={renderer}/>

	)
}