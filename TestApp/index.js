/* eslint-disable prettier/prettier */
// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import PhotoList from './src/components/PhotoList';

// Create a component
const App = () => (
	<View>
		<Header headerText={'Photo Gallery'} />
		<PhotoList />
	</View>
);

// Render it to the device

AppRegistry.registerComponent('TestApp', () => App);
