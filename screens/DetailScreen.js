import { View, Text, StyleSheet, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'


export function DetailScreen( props ) {
  const route = useRoute()
  const { id, name } = route.params

  const [ list, setList ] = useState([])

  useEffect( () => {
	  console.log( props.data )
	  setList(props.data)
  })

  return (
    <View>
	<Image source= {{uri:item.photo}}></Image>
      <Text>{ item.name }</Text>
      <Text>{ item.year }</Text>
	    <Text>{ item.price }</Text>
      <Text>{ item.category }</Text>
      <Text>{ item.country }</Text>
      <Text>{ item.comments }</Text>
    </View>
  )
}
