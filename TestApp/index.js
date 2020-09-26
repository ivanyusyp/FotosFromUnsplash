/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PhotoFullScreen from './src/screens/PhotoFullScreen';
import { createStore } from 'redux';
import photoReducer from './src/redux/PhotoReducer';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const store = createStore(photoReducer);

const PhotoStack = () => (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Gallery"
					options={{
						title: 'Photo Gallery',
						headerStyle: {
							backgroundColor: '#616161',
						},
						headerTintColor: '#F5F5F5',
						headerTitleStyle: {
							fontWeight: '400',
							fontFamily: 'Arial',
							textAlign: 'center',
						},
					}}
				>
					{props => <HomeScreen{...props} />}
				</Stack.Screen>
				<Stack.Screen name="PhotoFullScreen">
					{props => <PhotoFullScreen{...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>
);


AppRegistry.registerComponent('TestApp', () => PhotoStack);
