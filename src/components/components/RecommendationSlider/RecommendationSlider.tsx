import React, {useContext, useEffect, useState} from 'react';
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
import {Card} from "../../styles/GridStyles.css";
import RatingColor from "../../../utils/fnRatingColor";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import {MovieAssetType, ReviewType} from "../../../types/AssetTypes";
import {MovieCarousel} from "../ItemSlider/ItemSlider.css";
import axios from "axios";
import {RecommendationTitle} from "../RecommendationFeed/RecommendationFeed.css";
import {useLoading} from "../../../contexts/PageCategoriesLoadingContext";
import {AuthContext} from "../../../contexts/AuthContext";

type TParams = { review: ReviewType, isLiked: boolean }

export const RecommendationSlider: React.FC<TParams> = ({review, isLiked = false}) => {
    const responsive = {
        bigDesktop: {
            breakpoint: {max: 3840, min: 1920},
            items: 4,
            partialVisibilityGutter: 60
        },
        desktop: {
            breakpoint: {max: 1920, min: 1024},
            items: 3,
            partialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
            partialVisibilityGutter: 100
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            partialVisibilityGutter: 30
        }
    };
    const [movie, setMovie] = useState<MovieAssetType>(Object);
    const [recommendedIds, setRecommendedIds] = useState<string[]>([]);
    const [recommendedMovies, setRecommendedMovies] = useState<MovieAssetType[]>([]);
    const [recentlyFetchedMovie, setRecentlyFetchedMovie] = useState<MovieAssetType>(Object);
    const {setLoading} = useLoading();
    const userData = useContext(AuthContext);

    useEffect(()=>{
        setLoading(true);
    }, [])

    useEffect(() => {
        fetchMovie(review?.movie_id);
    }, [review]);

    useEffect(() => {
        if (movie) {
            fetchRecommendations(movie?.original_title);
        }
    }, [movie])

    useEffect(() => {
        if (recommendedIds.length > 0) {
            recommendedIds.forEach(async (id) => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=593c4bf64054350abc1378cb7718693e`);
                setRecentlyFetchedMovie(data);
            })
        }
    }, [recommendedIds])

    useEffect(() => {
        if (recentlyFetchedMovie) {
            if (recommendedMovies?.indexOf(recentlyFetchedMovie) === -1 || recentlyFetchedMovie !== movie) {
                setRecommendedMovies([...recommendedMovies, recentlyFetchedMovie]);
                setTimeout(()=>{
                    setLoading(false);
                }, 1250)
            }
        }
    }, [recentlyFetchedMovie])

    const fetchMovie = async (movie_id: number | string) => {
        const data = await fetch (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=593c4bf64054350abc1378cb7718693e`);
        const movieData = await data.json();
        setMovie(movieData);
    }

    const fetchRecommendations = async (movie_title: string) => {
        if (movie_title !== null) {
            try {
                const {data} = await axios.get(`http://localhost:5001/recommendations?movie_title=${movie_title}`);
                setRecommendedIds(data);
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (<>
        <RecommendationTitle> Because you <span>{userData?.username === review?.username ? 'posted' : 'liked'}</span> <a
            href={`/static/asset/${review?.movie_id}/review/${review?._id}`}>{review?.title}</a> for <a
            href={`/static/asset/${review?.movie_id}`}>{movie?.original_title}</a> you should check
            out: </RecommendationTitle>
        <MovieCarousel partialVisbile responsive={responsive} deviceType={'desktop'}>
            {!!recommendedMovies ? (recommendedMovies?.map((movie) => ( movie?.poster_path && (
                <Link
                    to={`/static/asset/${movie?.id}`}
                    style={{textDecoration: 'none'}}
                    key={`id_${movie?.original_title}`}
                >
                    <Card>
                        <img
                            src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`}
                            alt={`movieposter_${movie?.id}`}
                        />
                        <h2>{movie?.original_title}</h2>
                        <h3 style={{color: RatingColor(movie?.vote_average)}}>
                            <GradeRoundedIcon
                                style={{
                                    fontSize: '20',
                                    textAlign: 'center',
                                    color: RatingColor(movie?.vote_average),
                                }}
                            />
                            {movie?.vote_average} / 10
                        </h3>
                    </Card>
                </Link>)
            ))) : (<div>sorry no data</div>)}
        </MovieCarousel>
    </>)
}
