import { registerRootComponent } from "expo";
import { useState, useEffect } from "react";
import {
    StatusBar,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import { Camera } from "expo-camera";
import * as Shake from "expo-shake";

import lightOn from "./../assets/icons/eco-light.png";
import lightOff from "./../assets/icons/eco-light-off.png";
import logoDio from "./../assets/icons/logo-dio.png";
import logoDioWhite from "./../assets/icons/logo-dio-white.png";

const App = () => {
    const [flashlightOff, setFlashlightOff] = useState(true);
    const [hasPermission, setHasPermission] = useState(null);

    const handleFlashlightToggle = () => setFlashlightOff(!flashlightOff);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    useEffect(() => {
        const subscription = Shake.addListener(handleFlashlightToggle);

        return subscription.remove;
    });

    if (hasPermission === null) {
        return <StatusBar backgroundColor="black" barStyle="light-content" />;
    } else if (hasPermission === false) {
        Alert.alert(
            "Sem acesso à câmera",
            "O acesso à câmera é necessário para poder ligar/desligar o flash."
        );

        return <StatusBar backgroundColor="black" barStyle="light-content" />;
    } else if (hasPermission === true) {
        return (
            <SafeAreaView
                style={[
                    styles.container,
                    flashlightOff
                        ? styles.darkBackground
                        : styles.lightBackground,
                ]}
            >
                <StatusBar
                    backgroundColor={flashlightOff ? "black" : "white"}
                    barStyle={flashlightOff ? "light-content" : "dark-content"}
                />

                <Camera
                    style={styles.camera}
                    flashMode={flashlightOff ? "off" : "torch"}
                />

                <TouchableOpacity onPress={handleFlashlightToggle}>
                    <Image
                        style={[
                            styles.lightBulb,
                            flashlightOff ? styles.lightBulbOff : undefined,
                        ]}
                        source={flashlightOff ? lightOff : lightOn}
                    />
                    <Image
                        style={styles.logoDio}
                        source={flashlightOff ? logoDioWhite : logoDio}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    darkBackground: {
        backgroundColor: "black",
    },
    lightBackground: {
        backgroundColor: "white",
    },
    lightBulb: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 150,
        height: 150,
    },
    lightBulbOff: {
        tintColor: "white",
    },
    logoDio: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 250,
        height: 250,
    },
    camera: {
        width: 1,
        height: 1,
    },
});

export default registerRootComponent(App);
