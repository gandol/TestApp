import * as React from 'react';
import { View } from 'react-native';
import Warna from '../../../Utils/Warna';

const RowSectionWithBorderBootom = ({ children }) => (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: Warna.primaryColor, paddingBottom: 10 }}>
        {children}
    </View>
)
const RowSectionNoBorderBottom = ({ children }) => (
    <View style={{ paddingBottom: 10 }}>
        {children}
    </View>
)

export { RowSectionWithBorderBootom, RowSectionNoBorderBottom }