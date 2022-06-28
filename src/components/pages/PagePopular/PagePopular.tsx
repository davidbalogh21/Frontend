import React, {useContext, useEffect, useState} from 'react';
import { PopularContext } from '../../../contexts/PopularContext';
import { Card, CardWrapper, Title } from '../../styles/GridStyles.css';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import { Link } from 'react-router-dom';
import RatingColor from '../../../utils/fnRatingColor';
import { PopularInfo } from '../../../types/AssetTypes';
import {Spinner} from "../../components/Spinner/Spinner";
import {scrollToTop} from "../../../utils/fnScroll";

function PagePopular() {
	const popular = useContext<PopularInfo[]>(PopularContext);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(()=>{
		if (popular) {
			setTimeout(()=>{
				setIsLoading(false);
			}, 250);
		}
	}, [popular])

	return (
		<div>
			<Spinner isLoading={isLoading}/>
			<Title>Our current popular movies</Title>
			<CardWrapper>
				{popular.map((movie) => (
					<Link
						to={`/static/asset/${movie.id}`}
						style={{ textDecoration: 'none' }}
						key={`id_${movie.id}`}
						onClick={scrollToTop}
					>
						<Card key={`id_${movie.id}`}>
							<img
								src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
								alt={`movieposter_${movie.id}`}/>
							<h2>{movie?.title ?? movie?.original_name}</h2>
							<h3 style={{ color: RatingColor(movie.vote_average) }}>
								<GradeRoundedIcon
									style={{
										fontSize: '20',
										textAlign: 'center',
										color: RatingColor(movie.vote_average),
									}}
								/>
								{movie.vote_average.toPrecision(2)} / 10
							</h3>
						</Card>
					</Link>
				))}
			</CardWrapper>
		</div>
	);
}

export default PagePopular;