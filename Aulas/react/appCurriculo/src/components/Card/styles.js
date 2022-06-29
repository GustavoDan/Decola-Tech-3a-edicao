import { StyleSheet } from "react-native";
import Colors from "../../colors";

export default StyleSheet.create({
    card: {
        width: "80%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.darkGray,
        alignItems: "center",
        marginTop: 20,
        padding: 10,
        backgroundColor: "white",
    },
    cardContent: {
        alignItems: "center",
        marginTop: 10,
    },
    cardContentText: {
        color: Colors.darkGray,
        marginBottom: 10,
    },
});
