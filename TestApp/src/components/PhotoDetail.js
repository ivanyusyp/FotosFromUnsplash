/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const PhotoDetail = ({ item }) => {
	const onPressed = () => console.log('button is pressed');
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				onPress={onPressed}
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
		flexDirection: 'column',
		alignItems: 'center',
		paddingVertical: 10,
	},
});

export default PhotoDetail;