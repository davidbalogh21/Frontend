import React, { useEffect, useState } from 'react';
import { PhotoInfo, PhotoProps } from '../../../types/AssetTypes';


const CardPhoto: React.FC<PhotoProps> = ({ id, name }) => {
	const [photo, setPhoto] = useState<PhotoInfo[]>([]);

	useEffect(() => {
		const fetchPhoto = async () => {
			const photo = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=593c4bf64054350abc1378cb7718693e&with_genres=${id}`,
			);
			const photo_data = await photo.json();
			setPhoto(photo_data?.results);
		};
		fetchPhoto();
	}, []);


	return (
		<div>
			<img
				src={`https://www.themoviedb.org/t/p/original/${photo?.[6]?.backdrop_path}`}
				alt={`photo_${photo?.[1]?.id}`}
			/>
			<h2>{name}</h2>
			<h3>Includes movies such as: </h3>
			<ul>
				<li>{photo?.[1]?.title}</li>
				<li>{photo?.[2]?.title}</li>
				<li>{photo?.[3]?.title}</li>
			</ul>
		</div>
	);
};

export default CardPhoto;