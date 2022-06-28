import { Date } from '../components/pages/PageAssetDetails/PageAssetDetails.css';

export type RouteInfo = {
	id: string;
	route: string;
	label: string;
}

export type PopularInfo = {
	id: number;
	title?: string;
	name?: string;
	original_name?: string;
	poster_path: string;
	vote_average: number;
	backdrop_path: string;
	media_type: string;
}

export type GenreTypes = {
	id: number;
	name: string;
}

export type MovieAssetType = {
	backdrop_path: string;
	original_title: string;
	poster_path: string;
	release_date: string | Date;
	overview: string;
	tagline: string;
	runtime: number;
	vote_average: number;
	vote_count: number;
	imdb_id: number;
	id: string;
}

export type ActorInfo = {
	id: number;
	name: string;
	profile_path: string;
}

export type CompanyInfo = {
	id: number;
	name: string;
	logo_path: string;
}

export type VideoInfo = {
	name: string;
	key: string;
}

export type PhotoInfo = {
	backdrop_path: string;
	id: number;
	title: string;
}

export type PhotoProps = {
	id: number;
	name: string;
}

export type UserDetailsType = {
	follows: UserDetailsType[];
	created: Date;
	email: string;
	username: string;
	_id: string;
}

export type ReviewType = {
	_id: number;
	username: string;
	movie_id: number;
	user_id: string;
	title: string;
	description: string;
	rating: number;
	date: Date,
	comments: CommentType[],
	likes: UserDetailsType[]
}

export type CommentType = {
	username: string;
	_id: number;
	user_id: string;
	description: string;
	date: Date;
	likes: UserDetailsType[];
	sentimentScore: number;
}