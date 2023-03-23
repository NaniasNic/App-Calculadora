import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    button: {
        width: width * 0.25,
        height: height * 0.135,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1
    },
    numbers: {
        fontSize: 30,
        color: "#fff"
    }
})