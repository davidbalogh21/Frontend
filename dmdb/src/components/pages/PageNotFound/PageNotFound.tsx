import React, { useContext } from 'react';
import NotFoundGif from '../../../assets/images/notfound.gif';
import { Gif, Wrapper } from './PageNotFound.css';
import { Card, CategoryContainer } from '../../styles/GridStyles.css';
import { PopularContext } from '../../../contexts/PopularContext';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import { Link } from 'react-router-dom';
import RatingColor from '../../../utils/fnRatingColor';
import { PopularInfo } from '../../../types/AssetTypes';


function PageNotFound() {

	const popular = useContext<PopularInfo[]>(PopularContext);

	return (
		<div>
			<Wrapper>
				<Gif src={NotFoundGif} alt="error404"/>
				<h1>It looks like the page you were looking for could not be found!</h1>
				<h2>Meanwhile here are some popular movies!</h2>
			</Wrapper>
			<CategoryContainer repeatValue="22vw">
				{popular.slice(popular.length - 3, popular.length).map((movie) => (
					<Link
						to={`/static/asset/${movie.id}`}
						style={{ textDecoration: 'none' }}
						key={`id_${movie.id}`}
					>
						<Card>
							<img
								src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
								alt={`movieposter_${movie.id}`}/>
							<h2>{movie.title}</h2>
							<h3 style={{ color: RatingColor(movie.vote_average) }}>
								<GradeRoundedIcon
									style={{
										fontSize: '20',
										textAlign: 'center',
										color: RatingColor(movie.vote_average),
									}}
								/>
								{movie.vote_average} / 10
							</h3>
						</Card>
					</Link>
				))}
			</CategoryContainer>
		</div>
	);
}

export default PageNotFound;