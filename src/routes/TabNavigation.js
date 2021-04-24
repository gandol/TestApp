import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListingScreen from '../Components/screen/Listing';

const Tab = createMaterialTopTabNavigator();

function MembersTabRoutes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#BEAF87',
                inactiveTintColor: 'black',
                labelStyle: { fontSize: 12, fontFamily: 'OpenSans-Bold', textTransform: "none" },
                indicatorStyle: { backgroundColor: "#BEAF87" },
            }}
        >
            <Tab.Screen name="Listing" component={ListingScreen} />
            <Tab.Screen name="Favorite" component={ListingScreen} />
            <Tab.Screen name="Arsip" component={ListingScreen} />
        </Tab.Navigator>
    );
}

export default MembersTabRoutes;