/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const PhotoDetail = (props) => {
	console.log('idinPhotoDetail', props);
	return (
		<View style={styles.viewStyle} >
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate('PhotoFullScreen');
					console.log('current id', props.id);
					props.photo.current.unshift(props.id);
				}}
			>
				<Image
					style={styles.tinyLogo}
					source={{
						uri: props.item.urls.small,
					}}
				/>
			</TouchableOpacity>
			<Text>{props.item.user.username}</Text>
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