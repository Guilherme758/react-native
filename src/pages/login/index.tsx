import React from "react";

import { Text, View, Image } from "react-native";

import { styles } from "./styles"

import Logo from "../../assets/logo.png";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image source={Logo} style={styles.logo}/>
                <Text>Top</Text>
            </View>

            <View style={styles.boxMid}>
                <Text>Mid</Text>
            </View>

            <View style={styles.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}