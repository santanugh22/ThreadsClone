import { createStackNavigator } from '@react-navigation/stack'
import {createTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import Activity from '../Screens/Activity'
import CreatePost from '../Screens/CreatePost'
import Post from '../Screens/Post'
import Profile from '../Screens/Profile'

const Stack=createStackNavigator()


const Tab=createTabNavigator()

function Homescreen(){
  return <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name="Post" component={Post}/>
    <Tab.Screen name="createPost" component={CreatePost}/>
    <Tab.Screen name="Activity" component={Activity}/>
    <Tab.Screen name="Profile" component={Profile}/>

  
  </Tab.Navigator>
}



const StackNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={Homescreen}/>
    </Stack.Navigator>

  
  )
}
export default StackNavigator
const styles = StyleSheet.create({})