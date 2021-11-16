// const formlog = document.getElementById("login-form");
// const BtnLog = document.getElementById("login-form-submit");
// const ErrorMessage = document.getElementById("login-error-msg");

// BtnLog.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = formlog.username.value;
//     const password = formlog.password.value;

//     if (username === "admin" && password === "itsourcecode") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         ErrorMessage.style.opacity = 1;
//     }

import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native'

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    return (
        <View styles={styles.container}>
            <Image style={styles.image} source={require("./src/assets/ram.png")} />
<StatusBar style="auto" />
                  <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() =>navigation.navigate('Home')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        margin:10,
        maginTop:20,
      },
    
      image: {
        marginBottom: 40,
      },
      loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
})
