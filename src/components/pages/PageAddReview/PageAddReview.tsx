import React, { useEffect, useState } from 'react';
import {
	PageWrapper,
	Poster,
	ReviewForm,
	ReviewFormDescription,
	ReviewFormTitle, ReviewMovieRating, ReviewMovieTagline,
	ReviewWrapper
} from './PageAddReview.css';
import { History } from 'history';
import {MovieAssetType, UserDetailsType} from '../../../types/AssetTypes';
import {FormButton, FormInput, InputWrapper} from '../PageLogin/PageLogin.css';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";
import {useUser} from "../../../contexts/UserContext";

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
	const [value, setValue] = useState<number|null>(0);
	const [hover, setHover] = useState<number>(0);
	const [reviewTitle, setReviewTitle] = useState<string>('');
	const [reviewDescription, setReviewDescription] = useState<string>('');
	const [profileData, setProfileData] = useState<UserDetailsType>();

	const {userData} = useUser();


	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			history.push("/login");
		}
		const fetchMovies = async () => {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=593c4bf64054350abc1378cb7718693e`,
			);
			const movie = await data.json();
			setMovie(movie);
		};
		fetchMovies().then(result => console.log("SUCCESSFUL FETCH", movie));
	}, []);

	const fetchPrivateData = async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("authToken")}`
			}
		}

		try {
			const { data } = await axios.get("http://localhost:5000/api/auth/getUser", config);
			setProfileData(data.data);
		} catch (e) {
			localStorage.removeItem("authToken");
		}
	}

	const onSubmitReview = async (e: any) => {
		e.preventDefault();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}

		try {
			fetchPrivateData();

			const {data} = await axios.post("http://localhost:5000/api/review/addReview", {movie_id: match.params.id,
				user_id: userData.current?._id,
				username: userData.current?.username,
				rating: value,
				title: reviewTitle,
				description: reviewDescription}, config);

			history.push(`/static/asset/${match.params.id}`);
		} catch (error: any) {

		}
	};

	return <PageWrapper>
		<ReviewWrapper>
        <Poster
            src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`}
        />
			<ReviewForm onSubmit={onSubmitReview}>
				<InputWrapper>
					<ReviewFormTitle>
						{movie?.original_title}
					</ReviewFormTitle>
					<ReviewMovieTagline>
						{movie?.tagline}
					</ReviewMovieTagline>
					<FormInput type="text"
							   required
							   id="title"
							   value={reviewTitle}
							   onChange={(e) => setReviewTitle(e.target.value)}
							   placeholder="Review title"
							   />
					<ReviewFormDescription
						required
						id="description"
						value={reviewDescription}
						onChange={(e) => setReviewDescription(e.target.value)}
						placeholder="Your review..."
					/>
				</InputWrapper>
				{value !== null && (
					<div>{value ? value : hover}/10</div>
				)}
				<ReviewMovieRating
					name="hover-feedback"
					value={value}
					precision={0.5}
					size={'large'}
					max={10}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					onChangeActive={(event, newHover) => {
						setHover(newHover);
					}}
					emptyIcon={<StarIcon style={{ opacity: 0.7 }} fontSize="inherit" />}
				/>
				<FormButton type={"submit"}>ADD REVIEW</FormButton>
			</ReviewForm>
		</ReviewWrapper>
	</PageWrapper>
};