import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    boxTop: {
        height: Dimensions.get("window").height / 3,
        width: "100%",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    boxMid: {
        height: 200,
        width: "100%",
        backgroundColor: "green",
    },
    boxBottom: {
        height: 200,
        width: "100%",
        backgroundColor: "blue",
    },
    logo: {
        height: 80,
        width: 80,
    }
});