import * as React from 'react';
import { View } from "react-native"
import Warna from '../../Utils/Warna';
import { TextBold } from '../Text';

const LabelTypePenjaualan = ({ label = "Dijual", type = "sell" }) => {
    let color = Warna.blueButton
    let labell = label
    switch (type) {
        case "rent":
            color = Warna.greenButton
            labell = "Disewa"
            break;

        default:
            break;
    }
    return (
        <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 4, alignItems: "center", backgroundColor: color, opacity: 0.9 }}>
            <TextBold value={labell} style={{ color: Warna.white }} />
        </View>
    )
}

export default LabelTypePenjaualan;