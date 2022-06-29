import React from "react";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Pressable,
    Linking,
} from "react-native";

const colorGithub = "#010409";
const colorFontGithub = "#C9D1D9";
const colorDarkFontGithub = "#4F565E";

const imageProfileGithub =
    "https://avatars.githubusercontent.com/u/35714651?v=4";
const GithubProfile = "https://github.com/GustavoDan";

const App = () => {
    const handlePressGoToGithub = async () => {
        if (await Linking.canOpenURL(GithubProfile)) {
            await Linking.openURL(GithubProfile);
        }
    };

    const darkSquare = <View style={[style.square, style.darkSquare]} />;
    const lightSquare = <View style={[style.square, style.lightSquare]} />;
    let squareMapping = {
        dark: darkSquare,
        light: lightSquare,
    };

    const Squares = (props) => {
        let choosenSquare = squareMapping[props.type];

        let squares = Array.from({ length: props.quantity }, (_, index) =>
            React.cloneElement(choosenSquare, { key: index })
        );

        return squares;
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} style={"auto"} />
            <View style={style.content}>
                <Image
                    accessibilityLabel={"Imagem de perfil"}
                    style={style.avatar}
                    source={{ uri: imageProfileGithub }}
                />
                <Text
                    accessibilityLabel={"Nome:"}
                    style={[style.defaultText, style.name]}
                >
                    Gustavo Daniel
                </Text>
                <Text
                    accessibilityLabel={"Nickname:"}
                    style={[style.defaultText, style.nickname]}
                >
                    GustavoDan
                </Text>
                <Text
                    accessibilityLabel={"Descrição:"}
                    style={[style.defaultText, style.description]}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi tincidunt nibh a orci malesuada gravida. Fusce sodales
                    condimentum est, id.
                </Text>

                <View style={style.drawingContainer}>
                    <View style={style.line}>
                        <Squares type="dark" quantity="13" />
                    </View>

                    <View style={style.line}>
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="2" />
                        <Squares type="dark" quantity="3" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="3" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="2" />
                    </View>

                    <View style={style.line}>
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="2" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="2" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="1" />
                    </View>

                    <View style={style.line}>
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="2" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="2" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="1" />
                    </View>

                    <View style={style.line}>
                        <Squares type="dark" quantity="1" />
                        <Squares type="light" quantity="2" />
                        <Squares type="dark" quantity="3" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="3" />
                        <Squares type="light" quantity="1" />
                        <Squares type="dark" quantity="2" />
                    </View>

                    <View style={style.line}>
                        <Squares type="dark" quantity="13" />
                    </View>
                </View>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={[style.button]}>
                        <Text style={[style.defaultText, style.description]}>
                            Abrir no GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        padding: 20,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: "blue",
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        fontWeight: "bold",
    },
    drawingContainer: {
        marginTop: 15,
    },
    line: {
        flexDirection: "row",
    },
    square: {
        width: 15,
        height: 15,
        margin: 1,
        borderRadius: 5,
    },
    darkSquare: {
        backgroundColor: "green",
    },
    lightSquare: {
        backgroundColor: "lightgreen",
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 15,
        userSelect: "none",
    },
});

export default registerRootComponent(App);
