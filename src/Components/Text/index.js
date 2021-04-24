import React from 'react';
import { Text } from "react-native";

const TextBold = ({ value = "value", style }) => (
    <Text style={[{ fontFamily: 'OpenSans-Bold', }, style]}>{value}</Text>
)
const TextReguler = ({ value = "value", style }) => (
    <Text style={[{ fontFamily: 'OpenSans-Regular', }, style]}>{value}</Text>
)

export { TextBold, TextReguler };