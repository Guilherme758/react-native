import React, { useState } from "react";

import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles"

import Logo from "../../assets/logo.png";
import { themes } from "../../global/themes";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function getLogin(){
        try {
            if(!email || !password) {
                return Alert.alert("Atenção", "Informe os campos obrigatórios!");
            }

            Alert.alert("Sucesso", "Login realizado com sucesso!");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image 
                    source={Logo} 
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.textTop}>Mercadinho</Text>
            </View>

            <View style={styles.boxMid}>
                <Text style={styles.titleInput}>E-mail</Text>
                <View style={styles.boxInput}>
                    <TextInput 
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                    >
                    </TextInput>
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themes.colors.gray}                    
                    >
                    </MaterialIcons>
                </View>
                <Text style={styles.titleInput}>Senha</Text>
                <View style={styles.boxInput}>
                    <TextInput 
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                    >
                    </TextInput>
                    <MaterialIcons 
                        name="remove-red-eye"
                        size={20}
                        color={themes.colors.gray}
                        >    
                    </MaterialIcons>
                </View>
            </View>

            <View style={styles.boxBottom}>
                <TouchableOpacity 
                    style={styles.buttonEntrar}
                    onPress={getLogin}
                    >
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}