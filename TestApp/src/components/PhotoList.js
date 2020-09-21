/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import PhotoDetail from './PhotoDetail';

const MY_ACCESS_KEY = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const BASE_URL = 'https://api.unsplash.com/photos/';

const PhotoList = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`${BASE_URL}?client_id=${MY_ACCESS_KEY}`)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={styles.viewStyle}>
			{isLoading ? <ActivityIndicator /> : (
				<FlatList
					showsVerticalScrollIndicator={false}
					data={data}
					keyExtractor={({ id }, index) => id}
					renderItem={({ item }) => (
						<PhotoDetail item={item} />
					)}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		alignContent: 'space-between',
		paddingBottom: 25,

	},
});



export default PhotoList;

