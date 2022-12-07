import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
//react
import { useState, useEffect } from 'react';
//firebase
import { firebaseConfig  } from './config/Config';
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signOut,signInWithEmailAndPassword,
  createUserWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//firestore
import { 
  getFirestore, 
  doc, 
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
//screen
import { HomeScreen } from './screens/HomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { LoginScreen } from './screens/LoginScreen';
import { AddScreen } from './screens/AddScreen';
import { DetailScreen } from './screens/DetailScreen';
import { ListScreen } from './screens/ListScreen';
//component
import { SignOut } from './components/SignOut';
import { Colors } from 'react-native/Libraries/NewAppScreen';


//Function
const FBapp = initializeApp(firebaseConfig);
const FBauth = getAuth( FBapp );
const FBdb = getFirestore( FBapp );
const Stack = createNativeStackNavigator();

export default function App() {
  // state to track user's authentication
  const [auth,setAuth] = useState()
  // state to keep track of data from Firebase
  const [ data, setData ] = useState([])
   // state to keep track of data from Firebase
   const [ search, setSearch ] = useState([])
  //state to control data fetching
  const [ startup, setStartup ] = useState(false)
  // get data on startup
  useEffect(() => {
    if( startup === false && auth ) {
      getListData()
      setStartup( true )
    }
  }, [startup, auth])


  //firebase observer for user's authentication status
  onAuthStateChanged( FBauth, (user) => {
    if( user ){
      //user is signed in
      setAuth( user )
      console.log(user.uid)
    }
    else {
      setAuth( false )
    }
  })

  //function to sign up user
  const signUpHandler = ( email, password ) => {
    createUserWithEmailAndPassword( FBauth, email, password)
    .then( (userCredential) => console.log(userCredential) )
    .catch( (error) => console.log(error) )
  }

//Function to sign in user
const signInHandler = ( email, password ) => {
  signInWithEmailAndPassword( FBauth, email, password )
  .then( (userCredential) => console.log(userCredential))
  .catch( (error) => console.log(error))
}


//function to sign out user
const signOutHandler = () =>{
  signOut( FBauth )
  .then(() => console.log('signed out'))
  .catch((error) => console.log())

}

//function to add to user list
const addToList = async ( data ) => {
  const path = "users/" + auth.uid + "/list"
  const docRef = await addDoc( collection(FBdb, path),data)
}

/*
//Function to search list
const searchByName = (text) =>{
  if( !auth){
    return
  }
  //Define collection
  const path = "users/" + auth.uid + "/list"
  const q = query( collection(FBdb, path),where("name" == text ) )
  const unsubscribe = onSnapshot( q,(querySnapshot) => {
    let listData = []
    querySnapshot.forEach((doc) =>{
      let item = doc.data()
      item.id = doc.id
      listData.push( item )
    })
    setSearch( listData )
   // console.log(listData)
  })
}
*/


const getListData = () => {
  if( !auth){
    return
  }
  //Define collection
  const path = "users/" + auth.uid + "/list"
  const q = query( collection(FBdb, path) )
  const unsubscribe = onSnapshot( q,(querySnapshot) => {
    let listData = []
    querySnapshot.forEach((doc) =>{
      let item = doc.data()
      item.id = doc.id
      listData.push( item )
    })
    setData( listData )
   // console.log(listData)
  })
}

const getUserData = () => {
  if( !auth){
    return
  }
  //Define collection
  const path = "/users"
  const q = query( collection(FBdb, path) )
  const unsubscribe = onSnapshot( q,(querySnapshot) => {
    let userData = []
    querySnapshot.forEach((doc) =>{
      let user = doc.data()
      user.id = doc.id
      userData.push( user )
    })
    setData( userData )
   // console.log(listData)
  })
}

  return (
    <NavigationContainer >
      <Stack.Navigator >
        {/* <Stack.Screen name="Register" component={RegisterScreen}/> */}
        <Stack.Screen name="Register" options={{
                         headerShown:false,
                     }}>
          { (props) => <RegisterScreen {...props} handler={ signUpHandler} authStatus={auth}/> }
        </Stack.Screen>
        <Stack.Screen name="Login" options={{
                       headerShown:false,
                     }}>
        { (props) => <LoginScreen {...props} handler={signInHandler} authStatus={auth}/> }
        </Stack.Screen>
        <Stack.Screen name="Home" options={{
                      headerTitle:"Wine List",
                      headerTintColor:'#185C4D',
                      headerStyle:{
                        backgroundColor:'#EEDBCD',
                      },
                     // headerShown: false,
                      headerRight: ( props ) => <SignOut {...props} handler={signOutHandler}/>
                    }}>
        { (props) => <HomeScreen {...props} authStatus={auth} add={addToList} list={ data }/>}
        </Stack.Screen>
        <Stack.Screen name="Detail" options={{
                      headerTitle:"Wine Detail",
                      headerTintColor:'#185C4D',
                      headerStyle:{
                        backgroundColor:'#EEDBCD',
                      },
                     // headerShown: false,
                      headerRight: ( props ) => <SignOut {...props} handler={signOutHandler}/>
                    }}>
        { (props) => <DetailScreen {...props} authStatus={auth} llist={data}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#4d1426',
  },
});
