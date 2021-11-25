import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { RouteComponentProps } from 'react-router';
import {
	ActorBox,
	ActorName,
	ActorPhoto,
	Box,
	Button,
	CompanyPhoto,
	Date,
	ImportantText,
	Plot,
	Poster,
	TextBox,
	Title,
} from './PageAssetDetailscss';
import { ActorInfo, CompanyInfo, MovieElements, VideoInfo } from '../../../types/AssetTypes';

type TParams = { id: string };

function PageAssetDetails({ match }: RouteComponentProps<TParams>) {
	const [movie, setMovie] = useState<MovieElements>(Object);
	const [cast, setCast] = useState<ActorInfo[]>([]);
	const [companies, setCompanies] = useState<CompanyInfo[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [video, setVideo] = useState<VideoInfo[]>([]);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);


	useEffect(() => {
		const fetchMovies = async () => {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=593c4bf64054350abc1378cb7718693e`,
			);
			const cast = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=593c4bf64054350abc1378cb7718693e`);
			const video = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=593c4bf64054350abc1378cb7718693e`);
			const movie = await data.json();
			const castJson = await cast.json();
			const videoJson = await video.json();
			setMovie(movie);
			setVideo(videoJson?.results);
			setCast(castJson?.cast);
			setCompanies(movie?.production_companies);
			setLoading(false);
		};
		fetchMovies();
	}, []);

	return (
		<>
			{loading ? (
				<>loading</>
			) : (
				<>
					<Box>
						<Poster
							src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
						/>
						<TextBox>
							<Title>{movie.original_title}</Title>
							<Date>Released in: {movie.release_date}</Date>
							<Plot>{movie.overview}</Plot>
							<Plot>{movie.tagline}</Plot>
							<Plot>Runtime: {movie.runtime} minutes</Plot>
							<Date>
								Rating: {movie.vote_average}/10 from {movie.vote_count} users
							</Date>
							<Button
								href={`https://www.imdb.com/title/${movie.imdb_id}`}
								target="blank"
							>
								IMDB
							</Button>
							<Button
								isYoutube
								onClick={() => setModalIsOpen(!modalIsOpen)}
							>
								Youtube
							</Button>
							<Modal
								onClose={() => setModalIsOpen(false)}
								youtube={video}
								show={modalIsOpen}
							/>
						</TextBox>
					</Box>

					<ActorBox>
						<ImportantText>Cast: </ImportantText>

						{cast?.slice(0, 10).map((actors) => (
							<div key={`id_${actors?.id}`}>
								<ActorName>{actors?.name}</ActorName>
								{actors?.profile_path ? (
									<ActorPhoto
										src={`https://www.themoviedb.org/t/p/original/${actors?.profile_path}`}
									/>
								) : (
									<ActorPhoto
										src="https://vulcanoilco.com/wp-content/uploads/person-placeholder.png"/>
								)}
							</div>
						))}
					</ActorBox>

					<ActorBox>
						<ImportantText>Production companies: </ImportantText>

						{companies?.map((company) => (
							<div key={`id_${company?.id}`}>
								<ActorName>{company?.name}</ActorName>
								{company?.logo_path ? (
									<CompanyPhoto
										src={`https://www.themoviedb.org/t/p/original/${company?.logo_path}`}
									/>
								) : (
									<CompanyPhoto src="https://wiki.dave.eu/images/4/47/Placeholder.png"/>
								)}
							</div>
						))}
					</ActorBox>
				</>)}
		</>
	);
}

export default PageAssetDetails;