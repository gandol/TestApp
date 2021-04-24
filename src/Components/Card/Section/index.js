import * as React from 'react';
import { View } from 'react-native';
import Warna from '../../../Utils/Warna';
const SectionComp = ({ children }) => (
    <View style={{ marginBottom: 5, marginTop: 5, padding: 10, backgroundColor: Warna.white }}>
        {children}
    </View>
)

export default SectionComp