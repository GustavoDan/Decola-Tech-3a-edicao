import React from "react";
import { Text, View } from "react-native";
import Styles from "./styles";

export default ({ title, children }) => {
    return (
        <View style={Styles.card}>
            <Text>{title}</Text>

            <View style={Styles.cardContent}>
                {children.map((element, index) =>
                    React.cloneElement(element, {
                        style: Styles.cardContentText,
                        key: index,
                    })
                )}
            </View>
        </View>
    );
};
