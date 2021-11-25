import React, { useEffect, useState } from 'react';
import { Card, Title } from '../../styles/GridStyles.css';
import { FetchUrl } from '../../../types/Routing';
import { GenreTypes } from '../../../types/AssetTypes';
import CardPhoto from '../../components/Card/CardPhoto';
import { CategoryContainer } from './PageCategories.css';
import { Link } from 'react-router-dom';


function PageCategories() {
	useEffect(() => {
		fetchGenres().then(r => {
			console.log(r);
		});
	}, []);

	const [genres, setGenres] = useState<GenreTypes[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchGenres = async () => {
		const data = await fetch(FetchUrl.GENRES);
		const temp_genres = await data.json();
		setGenres(temp_genres.genres);
		setIsLoading(false);
	};


	return (
		<>
			{isLoading ? (
				<>loading</>
			) : (
				<div>
					<Title>Categories</Title>
					<CategoryContainer>
						{genres.map((genre) => (
							<Link
								to={`/static/movies/${genre.id}`}
								style={{ textDecoration: 'none' }}
								key={`id_${genre.id}`}
							>
								<Card key={`id_${genre.id}`}>
									<CardPhoto id={genre.id} name={genre.name}/>
								</Card>
							</Link>
						))}
					</CategoryContainer>
				</div>)}
		</>
	);
}

export default PageCategories;