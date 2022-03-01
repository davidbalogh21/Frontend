import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MovieAssetType} from "../../../types/AssetTypes";
import {PictureWrapper} from "./PosterPhoto.css";

type PosterPhotoPropsType = {
    movie_id: number;
}

export const PosterPhoto: React.FC<PosterPhotoPropsType> = ({movie_id}) => {
    const [movieData, setMovieData] = useState<MovieAssetType>();

    const getPictureOfMovie = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=593c4bf64054350abc1378cb7718693e`);
            setMovieData(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(()=>{
        getPictureOfMovie();
    }, []);

    return (
        <PictureWrapper alt={"poster"} src={`https://www.themoviedb.org/t/p/original/${movieData?.poster_path}`} />
    );
}