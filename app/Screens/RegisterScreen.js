import { StyleSheet, Text, View,Pressable,TextInput,SafeAreaView,Image,KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
      const navigation = useNavigation();

      const [username,setUsername]=useState('')
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 200, width: 200 }}
        />
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Register your account !
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 20,
            borderColor: "grey",
            borderWidth: 1,
            alignItems: "center",
            height: 50,
            padding: 12,
          }}
        >
          <MaterialCommunityIcons name="human" size={30} color="grey" />
          <TextInput
            placeholderTextColor="grey"
            style={{ width: 300, fontSize: 17, paddingLeft: 10 }}
            placeholder="Choose an username"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 20,
            borderColor: "grey",
            borderWidth: 1,
            alignItems: "center",
            height: 50,
            padding: 12,
          }}
        >
          <MaterialCommunityIcons name="email" size={30} color="grey" />
          <TextInput
            placeholderTextColor="grey"
            style={{ width: 300, fontSize: 17, paddingLeft: 10 }}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 20,
            borderColor: "grey",
            borderWidth: 1,
            alignItems: "center",
            height: 50,
            padding: 12,
          }}
        >
          <MaterialCommunityIcons name="lock" size={30} color="grey" />
          <TextInput
            secureTextEntrydd
            placeholderTextColor="grey"
            style={{ width: 300, fontSize: 17, paddingLeft: 10 }}
            placeholder="Enter your pass"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "black",
              height: 60,
              width: 200,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "white", fontSize: 21, fontWeight: "bold" }}>
              Register
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Text>Already have an account ?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{ color: "navy" }}>Signin</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default RegisterScreen
const styles = StyleSheet.create({})