import { registerRootComponent } from "expo";
import { SafeAreaView, Text, View, Image, StatusBar } from "react-native";
import Styles from "./styles";
import Colors from "./colors";
import Photo from "./assets/photo.png";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar backgroundColor={Colors.bgColor} />

            <View style={Styles.header}>
                <Image style={Styles.photo} source={Photo} />
                <Text style={Styles.nome}>Gustavo Daniel</Text>
                <Text style={Styles.funcao}>Desenvolvedor Mobile</Text>

                <View style={Styles.contacts}>
                    <Button contact="github" />
                    <Button contact="facebook" />
                    <Button contact="linkedin" />
                </View>
            </View>

            <Card title="Experiencia Profissional">
                <Text>LOREM IPSUM DOLOR SIT AMET</Text>
                <Text>CONSECTETUR ADIPISCING ELIT</Text>
                <Text>FUSCE EGET PURUS ELEIFEND</Text>
                <Text>LOBORTIS METUS SIT AMET</Text>
            </Card>

            <Card title="Formação acadêmica">
                <Text>NULLAM MATTIS SIT AMET NEQUE UT</Text>
                <Text>IN ET LOBORTIS MAGNA, NON</Text>
                <Text>ELIT UT ELEMENTUM FAUCIBUS</Text>
                <Text>LOREM ORCI FACILISIS RISUS</Text>
                <Text>PHASELLUS TEMPOR ERAT ELIT</Text>
            </Card>
        </SafeAreaView>
    );
};

export default registerRootComponent(App);
