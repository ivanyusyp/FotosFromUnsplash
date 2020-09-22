/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import PhotoList from '../components/PhotoList';

const HomeScreen = props => {
	return (
		<View>
			<Header headerText={'Photo Gallery'} />
			<PhotoList {...props} />
		</View>
	);
};



export default HomeScreen;
