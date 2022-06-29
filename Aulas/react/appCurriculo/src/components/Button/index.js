import { TouchableOpacity, Alert } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Contacts from "./contacts";

export default ({ contact }) => {
    return (
        <TouchableOpacity
            onPress={() =>
                Alert.alert(
                    `Meu ${contact[0].toUpperCase() + contact.slice(1)}`,
                    Contacts[contact]
                )
            }
        >
            <Feather name={contact} size={30} />
        </TouchableOpacity>
    );
};
