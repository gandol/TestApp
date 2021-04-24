import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Warna from '../../Utils/Warna';
import { TextBold, TextReguler } from '../Text';

const ButtonListing = ({ title, active = false, onpress }) => {
    let styleButton = { flex: 1, alignItems: 'center', paddingBottom: 10, justifyContent: "center", paddingTop: 10 }
    let textColor = Warna.balckPrivate
    if (active) {
        styleButton = { ...styleButton, borderBottomColor: "#BEAF87", borderBottomWidth: 2 }
        textColor = Warna.primaryColor
    }
    return (
        <TouchableOpacity style={styleButton} onPress={onpress} >
            <TextBold value={title} style={{ marginBottom: 10 }} style={{ color: textColor }} />
        </TouchableOpacity>
    )

}

const ButtonHalf = ({ children }) => (
    <View style={{ flex: 1, borderWidth: 0.7, borderRadius: 8, paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center' }} >
        {children}
    </View>
)

const ButtonBig = ({ children, style, onPress }) => (
    <TouchableOpacity
        style={[{ flex: 1, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 6 }, style]}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>

)



export { ButtonListing, ButtonHalf, ButtonBig };