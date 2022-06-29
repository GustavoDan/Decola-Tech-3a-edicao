import { useState } from "react";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

function App() {
    const [numero, setNumero] = useState(0);

    const handleNumero = () => setNumero(Math.floor(Math.random() * 1000));

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.numero}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleNumero}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        fontSize: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numero: {
        color: "white",
        fontSize: 38,
        fontWeight: "bold",
    },
    botao: {
        backgroundColor: "white",
        width: "80%",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
});

export default registerRootComponent(App);
