import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemberScreen from '../screen/Member';
import MembersTabRoutes from './TabNavigation';
import DetailScreen from '../screen/Detail';
import { Provider, useDispatch } from 'react-redux'

import { gantiList } from '../Helpers/Redux/actions';
import { Arsip, Favofite, Listing } from '../Utils/DummyData';
import { GANTI_LITS } from '../Helpers/Redux/actionTypes';
import { TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
const Stack = createStackNavigator();

function NavigationRoutes({ navigation }) {
	const navigationRef = React.useRef()
	const routeNameRef = React.useRef();
	const dispatch = useDispatch()
	const gantiLis = (list) => dispatch(gantiList(list, GANTI_LITS))
	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
			onStateChange={() => {
				const previousRouteName = routeNameRef.current;
				const currentRouteName = navigationRef.current.getCurrentRoute().name

				if (previousRouteName !== currentRouteName) {
					// console.log(currentRouteName);
					switch (currentRouteName) {
						case "Listing":
							gantiLis(Listing)
							break;
						case "Favorite":
							gantiLis(Favofite)
							break;
						case "Arsip":
							gantiLis(Arsip)
							break;

						default:
							console.log(currentRouteName);
							break;
					}
				}

				routeNameRef.current = currentRouteName;
			}}
		>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home" component={MemberScreen}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen name="Details"
					component={DetailScreen}
					options={({ route }) => ({
						title: `Detail Listing #${route.params.id}`,
						headerRight:()=>(
							<TouchableOpacity style={{marginRight:10}}>
								<Fontisto name="heart-alt" size={24} />
							</TouchableOpacity>
						)
					})}

				/>
			</Stack.Navigator>
		</NavigationContainer>

	);
}

export default NavigationRoutes