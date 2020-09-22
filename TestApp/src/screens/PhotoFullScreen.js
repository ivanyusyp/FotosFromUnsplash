/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

const MY_ACCESS_KEY = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const BASE_URL = 'https://api.unsplash.com/photos/';
const PhotoFullScreen = (props) => {
	const [isLoading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	console.log('props FUll SCREEN', props);
	// qbpM-CLCRtg
	useEffect(() => {
		fetch(`${BASE_URL}/qbpM-CLCRtg?client_id=${MY_ACCESS_KEY}`)
			.then((response) => response.json())
			.then((json) => setData(json.urls))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);
	// console.log('data', data);
	return (
		<View>
			{isLoading ? <ActivityIndicator /> : (
				<Image
					style={styles.logo}
					source={{
						uri: data.full,
					}}
				/>
			)}
		</View>
	);
};


const styles = StyleSheet.create({
	logo: {
		width: '100%',
		height: '100%',
	},
});

export default PhotoFullScreen;
