/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const PhotoDetail = (props) => {
	const navigateToPhotoFullScreen = () => props.navigation.navigate('PhotoFullScreen');
	const addCurrentIdToState = () => props.photo.current.unshift(props.id);
	return (
		<View style={styles.viewStyle} >
			<TouchableOpacity
				onPress={() => {
					navigateToPhotoFullScreen();
					addCurrentIdToState();
				}}
			>
				<Image
					style={styles.tinyLogo}
					source={{
						uri: props.item.urls.small,
					}}
				/>
			</TouchableOpacity>
			<Text style={styles.textStyle}>{props.item.user.username}</Text>
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
	textStyle: {
		color: 'white',
	}
});

export default PhotoDetail;