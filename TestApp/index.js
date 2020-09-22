/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PhotoFullScreen from './src/screens/PhotoFullScreen';


const Stack = createStackNavigator();

const PhotoStack = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Home">
				{props => <HomeScreen{...props} />}
			</Stack.Screen>
			<Stack.Screen name="PhotoFullScreen">
				{props => <PhotoFullScreen{...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	</NavigationContainer>
);
AppRegistry.registerComponent('TestApp', () => PhotoStack);
