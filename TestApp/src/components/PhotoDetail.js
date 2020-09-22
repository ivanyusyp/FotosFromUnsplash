/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PhotoFullScreen from '../screens/PhotoFullScreen';

const PhotoDetail = ({ navigation, item, id }) => {
	console.log('idinPhotoDetail', id);
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('PhotoFullScreen');
				}}
			>
				<Image
					style={styles.tinyLogo}
					source={{
						uri: item.urls.small,
					}}
				/>
			</TouchableOpacity>
			<Text>{item.user.username}</Text>
		</View >
	);
};



const styles = StyleSheet.create({
	tinyLogo: {
		width: 200,
		height: 200,
	},
	viewStyle: {
		alignItems: 'center',
		paddingVertical: 10,
	},
});

export default PhotoDetail;