import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import RoundedImage from '../../Components/SquareImage';
import { TextBold, TextReguler } from '../../Components/Text';
import MembersTabRoutes from '../../routes/TabNavigation';

const MemberScreen = (props) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white',padding:20,height:'20%' }}>
                <View style={{ width: 80, height: 80, marginBottom: 10 }}>
                    <RoundedImage />
                </View>
                <View style={{ width: '100%', alignItems: "center", marginBottom: 5 }}>
                    <TextBold value="Henry Scot" style={{ fontSize: 16 }} />
                </View>
                <View style={{ width: '100%', alignItems: "center", marginBottom: 5 }}>
                    <TextReguler value="Member Broker Century 21 BSD City" />
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around", marginTop: 20, backgroundColor: 'white',height:'80%' }}>
                <MembersTabRoutes />
            </View>
        </View>
    </View>
)

export default MemberScreen;