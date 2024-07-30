import React from "react";
import {View,Image,Text,TextInput, Button} from "react-native";
import logo from "../../image/logo.jpg";
import styles from "./loginStyle";
 
const Login=()=>{
    
    return(
            <View style={styles.container}>
                <Image style={styles.Image}
                    source={logo}>
                </Image>

                <View>
                    

                   <TextInput
                        style={styles.input}
                        placeholder="Email'inizi Giriniz"
                        keyboardType="email-address"
                    ></TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Şifreniniz Giriniz"
                        secureTextEntry={true}
                    ></TextInput>
                </View>

                <View style={styles.button_container}>
                    <Button
                        style={styles.button}
                        title="Giriş"
                        onPress={()=>{console.log("Tıklandı")}}>
                    </Button>     
                </View>

            </View>
       
    );
};

export default Login;