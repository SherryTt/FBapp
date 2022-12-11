import { View, Text, StyleSheet, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Button, Card, Title } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-web'


export function DetailScreen( props ) {
  const route = useRoute()
  const { id,name,year,price,country,category,comments,photo } = route.params


  return (
  <View style={styles.container}>
    <Card style={styles.cardBox} >
      <Card.Content style={styles.cardText}>
        <Title style={styles.cardTitle}>{ name }</Title>
          <Card.Cover style={{width:90, height:150,alignSelf:'center',marginVertical:20}} source= {{uri:photo}}/>
          
          <Text style={{marginVertical:5}}>YEAR : { year }</Text>
          <Text style={{marginBottom:5}}>CATEGORY : { category }</Text>
          <Text style={{marginBottom:5}}>COUNTRY : { country}</Text>
          <Text style={{marginBottom:5}}>PRICE : { price }</Text>
          < Text>NOTE : { comments }</Text>

      </Card.Content>
    </Card>

  </View> 
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#EEDBCD',
    height:"100%",
  },
	cardBox:{
    backgroundColor:'#EEDBCD',
    shadowColor:'grey',
    shadowOpacity:100,
    marginHorizontal:40,
    marginVertical:65,
    minHeight:420,
	},
  cardTitle:{
    fontWeight:'bold',
    marginVertical:20,
    alignSelf:'center',
  },
  cardText:{
    alignSelf:'center',
  },

})

  