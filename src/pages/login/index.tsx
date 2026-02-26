import React from "react";

import { Image, Text, TextInput, View } from "react-native";

import { styles } from "./styles"

import Logo from "../../assets/logo.png";

export default function Login() {
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
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <Text style={styles.titleInput}>Senha</Text>
                <View style={styles.boxInput}>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
            </View>

            <View style={styles.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}