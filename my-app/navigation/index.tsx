import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "../app/Screens/Dashboard";


const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(10, 132, 255)',
    background: '#fff',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
};

// const YellowBack = ({onPress}) => (
//   <TouchableOpacity onPress={onPress} style={{marginLeft: 8, padding: 5}}>
//     <Image style={{width: 30, height: 30, resizeMode: 'contain'}} source={require('../assets/images/back_icon.png')}/>
//   </TouchableOpacity>
// );

export default function App({ colorScheme }: { colorScheme: ColorSchemeName }) {

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? MyTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        {/*<Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation, route }) => ({
            headerTitleStyle: styles.blackHeaderTitleStyle,
            headerStyle:styles.whiteHeaderStyle,
          })}
        />*/}
          {/*<Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown:false}}
          />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  headerStyle: {
		backgroundColor: 'white'
	},
  headerTitleStyle: {
    color: 'black',
		fontSize: 16,
    fontWeight: 'bold'
  },
  blueHeaderStyle: {
    backgroundColor:'#0077c0',
  },
  primaryHeader:{
    backgroundColor:"#ED2C3B",
    shadowOffset: {height: 0, width:0},
    elevation: 0,
  },
  primaryHeaderTitle:{
    color:'white'
  },
});
