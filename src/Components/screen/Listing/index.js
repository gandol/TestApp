import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView, View, TouchableOpacity } from "react-native";
import CardContainer from '../../Card/CardContainer';
import { TextBold, TextReguler } from "../../Text";
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import Warna from '../../../Utils/Warna';
function ListingScreen() {
    const [showModal, setShowModal] = useState(false)
    const navigation = useNavigation()
    const datalist = useSelector(state => state.listReducer.list)
    const handleClose = () => {
        setShowModal(false)
    }
    return (
        <View style={{ flex: 1, marginTop: 10 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ width: '100%', alignItems: 'center' }}>
                    {
                        datalist.map((data) => (
                            <CardContainer navigation={navigation} data={data} openModal={() => {
                                setShowModal(true)
                            }} />
                        ))
                    }
                </View>
                <View style={{ height: 40 }}></View>
            </ScrollView>
            <Modal
                isVisible={showModal}
                backdropColor={Warna.balckPrivate}
                backdropOpacity={0.7}
                onBackButtonPress={handleClose}
                onBackdropPress={handleClose}
                style={{
                    justifyContent: 'flex-end',
                    width: Dimensions.get('screen').width + 20,
                    marginLeft: -10,
                    marginBottom: 0,
                }}
            >
                <View style={{ backgroundColor: 'white', padding: 10, alignItems: 'center', width: Dimensions.get('screen').width + 20, alignItems: 'center', borderTopStartRadius: 30, borderTopEndRadius: 30,elevation:3}}>
                    <TouchableOpacity style={{ flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: Warna.primaryColor, paddingTop: 10, paddingBottom: 10, width: '90%', marginTop: 10 }}>
                        <SimpleLineIcons name="pencil" size={19} style={{ marginRight: 15 }} />
                        <TextBold value="Ubah" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: Warna.primaryColor, paddingTop: 10, paddingBottom: 10, width: '90%', marginTop: 10 }}>
                        <FontAwesome name="trash-o" size={19} style={{ marginRight: 15 }} />
                        <TextBold value="Hapus" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 10, width: '90%', marginBottom: 20, marginTop: 10 }}>
                        <MaterialCommunityIcons name="label-outline" size={19} style={{
                            marginRight: 15, transform: [
                                { rotate: '-25deg' }
                            ]
                        }} />
                        <TextBold value="Tandai Terjual" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )

}

// const ListingConnected = connect(state => ({ list: state.list }))(ListingScreen)


export default ListingScreen;