import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

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
        height: Dimensions.get("window").height / 4,
        width: "100%",
        backgroundColor: "green",
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: 200,
        width: "100%",
        backgroundColor: "blue",
    },
    logo: {
        height: 80,
        width: 80,
    },
    textTop: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 40,
    },
    titleInput: {
        marginTop: 20,
        marginLeft: 5,
        color: themes.colors.gray,
    },
    boxInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.lightGray,
        paddingHorizontal: 15,
    },
    textInput: {
        height: "100%",
        width: "90%",
        borderRadius: 40,
    }
});