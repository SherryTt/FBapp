import { View, Text, StyleSheet, Image } from 'react-native'
import {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native'

export function DetailScreen( props ) {
  const route = useRoute()
  const { name,year,price,country,category,comments,photo } = route.params

  return (
    <View>
       <Image 
				style={{width:90, height: 150}}
							source= {{uri:photo}}
						/>
      <Text>{ name }</Text>
      <Text>{ year }</Text>
      <Text>{ price }</Text>
      <Text>{ category }</Text>
      <Text>{ country}</Text>
      <Text>{ comments }</Text>
    </View>
  )
}


  