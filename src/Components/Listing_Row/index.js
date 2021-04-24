import * as React from 'react';
import { Image, View } from 'react-native';
import Warna from '../../Utils/Warna';
import { TextBold, TextReguler } from '../Text';

const ListingInforow = ({ data }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            {
                data.map((listing, i) => (
                    <View style={{ width: "50%", alignItems: "center", flexDirection: "row",marginBottom:15 }} key={i}>
                        <View style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 0.6, borderColor: Warna.primaryColor, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={listing.image} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                        </View>
                        <View style={{ width: "65%",marginLeft:"5%" }}>
                            <TextReguler value={listing.title} style={{ marginBottom: 5 }} />
                            <TextBold value={listing.value} />
                        </View>
                    </View>
                ))
            }
        </View>
    )
}


export default ListingInforow;
