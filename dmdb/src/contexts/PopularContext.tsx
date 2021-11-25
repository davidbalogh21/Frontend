import React, { createContext, useState, useEffect } from 'react';
import { FetchUrl } from '../types/Routing';
import { PopularInfo } from '../types/AssetTypes';


const initialPopular: PopularInfo[] = [{ id: 0, title: '', poster_path: '', vote_average: 0, backdrop_path: '' }];
export const PopularContext = createContext<PopularInfo[]>(initialPopular);

export const PopularProvider: React.FC = (props) => {

	useEffect(() => {
		fetchPopular();
	}, []);

	const [popular, setPopular] = useState([]);


	const fetchPopular = async () => {
		const data = await fetch(FetchUrl.POPULAR);
		const data_json = await data.json();
		setPopular(data_json.results);
	};


	return (
		<PopularContext.Provider value={popular}>
			{props.children}
		</PopularContext.Provider>
	);
};