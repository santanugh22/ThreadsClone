import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'

const Stack=createStackNavigator()
const StackNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen}/>
    </Stack.Navigator>

  
  )
}
export default StackNavigator
const styles = StyleSheet.create({})