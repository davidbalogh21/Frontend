import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import { Card, CardWrapper } from '../../styles/GridStyles.css';
import { Title } from '../PageAssetDetails/PageAssetDetails.css';
import { RouteComponentProps } from 'react-router';
import RatingColor from '../../../utils/fnRatingColor';

type TParams = { id: string, name: string }

interface CategoryInfo {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
}

const PAGE_NUMBER: number = 1;

function PageAssets({ match }: RouteComponentProps<TParams>) {
	const [pageNum, setPageNum] = useState<number>(PAGE_NUMBER);

	useEffect(() => {
		const fetchCategory = async (pageNum: number) => {
			const data = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=593c4bf64054350abc1378cb7718693e&with_genres=${match.params.id}&page=${pageNum}`,
			);
			const category = await data.json();
			setCurrentCategory([...currentCategory, ...category?.results]);
			setIsLoading(false);
		};
		fetchCategory(pageNum);
	}, [pageNum]);

	window.onscroll = function() {
		if (
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight
		) {
			setPageNum(pageNum + 1);
		}
	};

	const [isLoading, setIsLoading] = useState(true);
	const [currentCategory, setCurrentCategory] = useState<CategoryInfo[]>([]);

	return (
		<div>
			{isLoading ? (
				<>loading</>
			) : null}
			<Title>{match.params.name}</Title>
			<CardWrapper id="category">
				{currentCategory.map((movie) => (
					<Link
						to={`/static/asset/${movie.id}`}
						style={{ textDecoration: 'none' }}
						key={`id_${movie.title}`}
					>
						<Card>
							<img
								src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
								alt={`movieposter_${movie.id}`}
							/>
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
			</CardWrapper>
		</div>
	);
}

export default PageAssets;