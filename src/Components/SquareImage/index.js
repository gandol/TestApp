import React from 'react';
import { Image, View } from 'react-native';


const RoundedImage = (props) => (
    <View style={{alignItems: 'center', justifyContent: 'center',borderWidth: 0.5,padding:2,borderRadius:40,borderColor:"#BEAF87"}}>
        <Image source={require("../../../assets/img/user.png")} style={{height:'100%',width:'100%',borderRadius:200,resizeMode:'cover'}}  />
    </View>
)

export default RoundedImage;