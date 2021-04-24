import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RowSectionWithBorderBootom, RowSectionNoBorderBottom } from '../../Components/Card/RowSection';
import { TextBold, TextReguler } from '../../Components/Text';
import Warna from '../../Utils/Warna';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ButtonHalf, ButtonListing, ButtonBig } from '../../Components/Button';
import SectionComp from '../../Components/Card/Section';
import ListingInforow from '../../Components/Listing_Row';
import NotifService from '../../../NotifService';

const dataInfo = [
    {
        image: require("../../../assets/img/kTidur.png"),
        title: "Kamar Tidur",
        value: "3 + 1"
    },
    {
        image: require("../../../assets/img/kMandi.png"),
        title: "Kamar Mandi",
        value: "3 + 1"
    },
    {
        image: require("../../../assets/img/lTanah.png"),
        title: "Luas Bangunan",
        value: "250m2"
    },
    {
        image: require("../../../assets/img/lTanah.png"),
        title: "Luas Tanah",
        value: "300m2"
    },
    {
        image: require("../../../assets/img/lTanah.png"),
        title: "(P x L) Bangunan",
        value: "25 x 10m"
    },
    {
        image: require("../../../assets/img/lTanah.png"),
        title: "(P x L) Tanah",
        value: "30 x 10m"
    },
    {
        image: require("../../../assets/img/lLantai.png"),
        title: "Jumlah Lantai",
        value: "2"
    },
    {
        image: require("../../../assets/img/listrik.png"),
        title: "Listrik",
        value: "3.0001"
    },
    {
        image: require("../../../assets/img/lGarasi.png"),
        title: "Kapasitas Garasi",
        value: "2"
    },
    {
        image: require("../../../assets/img/lParkir.png"),
        title: "Kapasitas Parkir",
        value: "2"
    },
    {
        image: require("../../../assets/img/lPhone.png"),
        title: "Line Telepone",
        value: "2"
    },
]
function DetailScreen() {
    const [dataList, setDataList] = useState([])
    const [doneChunk, setDoneChunk] = useState(false)
    const [listingActive, setListingActive] = useState(true)
    const [DeskripsiActive, setDeskripsiActive] = useState(false)
    useEffect(() => {
        let datalist = chunkArray(dataInfo, 2)
        setDataList(datalist);
        setDoneChunk(true)
    }, [])

    const handleListing = () => {
        setListingActive(true)
        setDeskripsiActive(false)
    }
    const handleDeskripsi = () => {
        setListingActive(false)
        setDeskripsiActive(true)
    }

    const sendNotif = useCallback(() => {
        let kirim = new NotifService()
        kirim.localNotif()
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: Warna.background }}>
            <ScrollView>
                <Image source={require("../../../assets/img/rumah.png")} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
                <View style={{
                    padding: 10, backgroundColor: Warna.white, paddingBottom: 20, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                    borderBottomStartRadius: 10,
                    borderBottomEndRadius: 10,
                    marginBottom: 5
                }}>
                    <RowSectionWithBorderBootom>
                        <TextReguler value="Nava Park BSD City" />
                        <TextBold value="Rp 6.500.000.000" style={{ fontSize: 22 }} />
                    </RowSectionWithBorderBootom>
                    <View style={{ flexDirection: "row", marginTop: 10, alignItems: 'center' }}>
                        <View style={{ width: "80%" }}>
                            <TextReguler value="Rumah Untuk Dijual" />
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Ionicons name="md-location-outline" size={10} color={Warna.PrimaryDetail} />
                                <TextReguler value="Jl. Edutown Kav III.1, BSD, Tangerang Selatan" style={{ marginLeft: 5, color: Warna.PrimaryDetail, fontSize: 10 }} />
                            </View>
                        </View>
                        <View style={{ width: '20%' }}>
                            <Image source={require("../../../assets/img/peta.png")} style={{ width: 53, height: 36, resizeMode: 'contain' }} />
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', backgroundColor: Warna.white, flexDirection: "row", flexWrap: "wrap", marginTop: 10, marginBottom: -5 }}>
                    <ButtonListing title="Listing Info" active={listingActive} onpress={handleListing} />
                    <ButtonListing title="Deskripsi" active={DeskripsiActive} onpress={handleDeskripsi} />
                </View>
                {
                    listingActive
                        ?
                        <>
                            <SectionComp>
                                <RowSectionWithBorderBootom>

                                    {
                                        doneChunk
                                            ?
                                            dataList.map((data) => (
                                                <ListingInforow data={data} />
                                            ))
                                            :
                                            null
                                    }
                                </RowSectionWithBorderBootom>
                                <RowSectionWithBorderBootom>
                                    <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'center' }}>
                                        <Image source={require("../../../assets/img/sertifikat.png")} style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10 }} />
                                        <TextReguler value={"Sertifikat Hak Milik"} />
                                    </View>
                                </RowSectionWithBorderBootom>
                                <RowSectionNoBorderBottom>
                                    <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'center' }}>
                                        <Image source={require("../../../assets/img/posting.png")} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 10 }} />
                                        <TextReguler value={"Diposting pada: 24-Dec-2019"} />
                                    </View>
                                </RowSectionNoBorderBottom>
                            </SectionComp>
                            <SectionComp>
                                <RowSectionNoBorderBottom>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Fontisto name="locked" size={20} style={{ marginRight: 10 }} />
                                        <TextBold value={"Catatan Internal"} />
                                    </View>
                                    <TextReguler value="Hanya akan dilihat oleh Marketing satu perusahaan." style={{ color: Warna.primaryColor, marginTop: 10 }} />
                                    <TextReguler value="Alamat Details:" style={{ marginTop: 10 }} />
                                    <TextReguler value="NavaPark Cluster Moonlight Blok 38D No. 55" style={{ marginTop: 10 }} />
                                </RowSectionNoBorderBottom>

                            </SectionComp>
                            <SectionComp>
                                <RowSectionNoBorderBottom>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Fontisto name="locked" size={20} style={{ marginRight: 10 }} />
                                        <TextBold value={"Owner Properti"} />
                                    </View>
                                    <TextReguler value="Hanya anda yang dapat melihat informasi ini." style={{ color: Warna.primaryColor, marginTop: 10 }} />
                                    <View style={{ width: '100%', flexDirection: "row", alignItems: 'center', marginTop: 10 }}>
                                        <TextReguler value="Nama: " />
                                        <TextBold value="Jois Aprillio" />
                                    </View>
                                    <View style={{ width: '100%', flexDirection: "row", alignItems: 'center' }}>
                                        <TextReguler value="No. Hp: " />
                                        <TextBold value="081388809999" />
                                    </View>
                                </RowSectionNoBorderBottom>
                                <View style={{ width: "100%", flexDirection: "row" }}>
                                    <View style={{ width: '45%' }}>
                                        <ButtonHalf>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require("../../../assets/img/phone.png")} style={{ width: 24, height: 24, resizeMode: 'contain', marginRight: 10 }} />
                                                <TextReguler value={"Telepon"} />
                                            </View>
                                        </ButtonHalf>

                                    </View>
                                    <View style={{ width: '10%' }}></View>
                                    <View style={{ width: '45%' }}>
                                        <ButtonHalf>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require("../../../assets/img/wa.png")} style={{ width: 24, height: 24, resizeMode: 'contain', marginRight: 10 }} />
                                                <TextReguler value={"WhatsApp"} />
                                            </View>
                                        </ButtonHalf>

                                    </View>
                                </View>
                            </SectionComp>
                        </>
                        :
                        null
                }
                <View style={{ height: 80 }}></View>
            </ScrollView>
            <View style={{ backgroundColor: Warna.background, width: '100%', padding: 10, position: 'absolute', bottom: 0, alignItems: 'center' }}>
                <View style={{ width: '90%' }}>
                    <ButtonBig
                        style={{ backgroundColor: Warna.balckPrivate }}
                        onPress={sendNotif}
                    >
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <FontAwesome5 name="share-square" size={20} style={{ marginRight: 10, color: Warna.white }} />

                            <TextReguler value={"Promosikan"} style={{ color: Warna.white, fontSize: 16 }} />
                        </View>
                    </ButtonBig>

                </View>
            </View>
        </View>
    )
}

function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}


export default DetailScreen;