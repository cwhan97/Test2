import React, { useContext, useState } from "react";
import {
	Image,Text,
	StyleSheet,
	View,
	Platform,TouchableOpacity,
	AsyncStorage
} from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';
import Dashboard from "../app/Screens/Dashboard";
import Setting from "../app/Screens/Setting";
import Search from "../app/Screens/Search";
import LocalizationContext from '../LocalizationContext';

// import BottomTabBar2 from './BottomTabBar'

const Stack = createStackNavigator();
const BottomBar = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

function DashboardStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{headerShown: false}}

			/>
    </Stack.Navigator>
  );
}


function App(props) {
	const barColor = 'white';
	const { state, descriptors, navigation, params } = props;
	const { t, i18n } = React.useContext(LocalizationContext);

	return(
		<Tab.Navigator
			initialRouteName="DashboardStack"
			labelPosition={'below-icon'}
    >
			<Tab.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					tabBarLabel: t('bottomtab.Dashboard'),
					headerShown:false,
				}}
			/>
      <Tab.Screen
				name="Setting"
				component={Setting}
				options={{
					tabBarLabel: t('bottomtab.Setting'),
					headerShown:false,
				}}
			/>

    </Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	whiteHeaderStyle: {
		backgroundColor: 'white',
		elevation:0,
		shadowOpacity:0,
	},
  headerTitleStyle: {
		fontSize: 17,
		textAlign: 'center',
  },
	bottomTabIcon:{
		width:26,
		height:26,
	},
	notificationBadge: {
		width: 15,
		height: 15,
		backgroundColor: 'red',
		borderRadius: 50,
		position: 'absolute',
		top: 0,
		right: -5,
		zIndex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	badgeNumber: {
		color: '#fff',
		fontSize: 10,
	}
});

export default App;
