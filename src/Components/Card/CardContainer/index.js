import * as React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import LabelTypePenjaualan from '../../Label';
import RoundedImage from '../../SquareImage';
import { TextBold, TextReguler } from '../../Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Warna from '../../../Utils/Warna';

const CardContainer = ({ navigation, data, openModal }) => (
    <TouchableOpacity
        style={styles.containerStyle}
        onPress={() => {
            navigation.navigate("Details", {
                id: data.id
            })
        }}
    >
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: 60, padding: 5, marginBottom: 1 }}>
            <View style={{ width: 50, marginLeft: 5 }}>
                <RoundedImage />
            </View>
            <View style={{ width: '70%', marginLeft: 5 }}>
                <TextBold value={data.property_owner} />
                <TextReguler value={data.lokasi} />
            </View>
            <TouchableOpacity style={{ width: '25%', marginLeft: 5 }} onPress={openModal} >
                <SimpleLineIcons name="options-vertical" size={22} />
                {/* <TextBold value={":"} /> */}
            </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 131, marginBottom: 10 }}>
            <Image source={data.image_property} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            {
                data.sold
                    ?
                    <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            backgroundColor: "#FFFFFFE6", width: 120, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 2, borderColor: Warna.primaryColor, borderWidth: 4, borderStyle: 'dashed', transform: [
                                {
                                    rotate: "-15deg"
                                }
                            ]
                        }}>
                            <TextReguler value={data.sale_type == "rent" ? "TERSEWA" : "TERJUAL"} style={{ color: Warna.primaryColor }} />
                        </View>
                    </View>
                    :
                    null
            }
        </View>
        <View style={{ width: '94%' }}>
            {data.is_private
                ?
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TextReguler value={data.property_name} style={{ width: '80%' }} />
                    <View style={{ backgroundColor: Warna.balckPrivate, width: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                        <TextReguler value={"PRIVATE"} style={{ color: "white", fontSize: 11 }} />
                    </View>
                </View>
                :
                <TextReguler value={data.property_name} />
            }
            <TextBold value={data.property_price} style={{ fontSize: 18 }} />
            <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: 5 }}>
                <TextBold value={data.peperty_cat} style={{ fontSize: 14, marginRight: 20 }} />
                <LabelTypePenjaualan type={data.sale_type} />
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center', borderBottomColor: Warna.PrimaryDetail, borderBottomWidth: 0.5, paddingBottom: 5 }}>
                <Ionicons name="md-location-outline" size={10} color={Warna.PrimaryDetail} />
                <TextReguler value={data.property_address} style={{ marginLeft: 5, color: Warna.PrimaryDetail, fontSize: 10 }} />
            </View>
            <View style={{ flexDirection: "row", marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ width: "30%" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../../../assets/img/kTidur.png")} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                        <TextBold value={data.k_tidur} style={{ marginLeft: 10 }} />
                    </View>
                    <TextReguler value="K.Tidur" />
                </View>
                <View style={{ width: '5%', borderLeftColor: Warna.PrimaryDetail, borderLeftWidth: 0.5 }}></View>
                <View style={{ width: "30%" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../../../assets/img/kMandi.png")} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                        <TextBold value={data.k_mandi} style={{ marginLeft: 10 }} />
                    </View>
                    <TextReguler value="K.Mandi" />
                </View>
                <View style={{ width: '5%', borderLeftColor: Warna.PrimaryDetail, borderLeftWidth: 0.5 }}></View>
                <View style={{ width: "30%" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../../../assets/img/lTanah.png")} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                        <TextBold value={data.l_tanah} style={{ marginLeft: 10 }} />
                    </View>
                    <TextReguler value="L.Tanah" />
                </View>
            </View>
        </View>


    </TouchableOpacity>
)

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        height: 350, backgroundColor: 'white',
        width: '90%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginBottom: 20
        // paddingRight:'5%'
    }
})

export default CardContainer;