import React, { useEffect, useState } from 'react';
import { PageWrapper, Poster, ReviewTitle, ReviewWrapper } from './PageAddReview.css';
import { History } from 'history';
import { MovieAssetType } from '../../../types/AssetTypes';
import { Form, FormInput, InputWrapper } from '../PageLogin/PageLogin.css';

type PageAddReviewPropsType = {
	history: History,
	match: {
		params: {
			id: number;
		}
	}
};

export const PageAddReview: React.FC<PageAddReviewPropsType> = ({history, match}) => {
	const [movie, setMovie] = useState<MovieAssetType>(Object);

	/* useEffect(()=>{
		if (!localStorage.getItem("authToken")) {
			history.replace("/login");
		}
	}, []); */

	useEffect(() => {
		const fetchMovies = async () => {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=593c4bf64054350abc1378cb7718693e`,
			);
			const movie = await data.json();
			setMovie(movie);
		};
		fetchMovies().then(result => console.log("SUCCESSFUL FETCH", result));
	}, []);

	return <PageWrapper>
		<ReviewWrapper>
        <Poster
            src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`}
        />
			<Form>
				<InputWrapper>
					<FormInput type="text"
							   required
							   id="title"
							   placeholder="Review title"
							   />
				</InputWrapper>
			</Form>
		</ReviewWrapper>
	</PageWrapper>
};