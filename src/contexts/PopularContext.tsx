import React, { createContext, useState, useEffect } from 'react';
import { FetchUrl } from '../types/Routing';
import { PopularInfo } from '../types/AssetTypes';


const initialPopular: PopularInfo[] = [{ id: 0, title: '', poster_path: '', vote_average: 0, backdrop_path: '', media_type: '' }];

export const PopularProvider: React.FC = (props) => {
	const [popular, setPopular] = useState([]);

	const fetchPopular = async () => {
		const data = await fetch(FetchUrl.POPULAR);
		const data_json = await data.json();
		setPopular(data_json.results.filter((res: { media_type: string; }) => res?.media_type === 'movie'));
	};

	useEffect(() => {
		fetchPopular();
	}, []);

	return (
		<PopularContext.Provider value={popular}>
			{props.children}
		</PopularContext.Provider>
	);
};

export const PopularContext = createContext<PopularInfo[]>(initialPopular);
