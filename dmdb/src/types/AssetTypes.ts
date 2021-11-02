import {Date} from '../components/styles/AssetStyles';

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
}

export type GenreTypes = {
    id: number;
    name: string;
}

export type MovieElements = {
    original_title: string;
    poster_path: string;
    release_date: string | Date;
    overview: string;
    tagline: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
    imdb_id: number;
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