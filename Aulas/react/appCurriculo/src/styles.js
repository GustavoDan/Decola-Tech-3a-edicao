import { StyleSheet } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
    },
    header: {
        alignItems: "center",
        marginTop: 10,
    },
    photo: {
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
    },
    nome: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
    },
    funcao: {
        color: Colors.darkGray,
    },
    contacts: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-evenly",
        width: "100%",
    },
});
