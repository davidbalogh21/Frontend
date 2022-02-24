import React, {useEffect, useState} from 'react';
import "react-multi-carousel/lib/styles.css";
import {MovieCarousel} from "./ItemSlider.css";
import {Link} from "react-router-dom";
import {Card} from "../../styles/GridStyles.css";
import RatingColor from "../../../utils/fnRatingColor";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import {RouteComponentProps} from "react-router";

type TParams = { id: number }

export const ItemSlider: React.FC<TParams> = ({id}) => {
    const responsive = {
        bigDesktop: {
            breakpoint: { max: 3840, min: 1920 },
            items: 4,
            partialVisibilityGutter: 60
        },
        desktop: {
            breakpoint: { max: 1920, min: 1024 },
            items: 3,
            partialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 100
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };

    type CategoryInfo = {
        id: number;
        title: string;
        poster_path: string;
        vote_average: number;
    }

    const [isLoading, setIsLoading] = useState(true);
    const [currentCategory, setCurrentCategory] = useState<CategoryInfo[]>([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=593c4bf64054350abc1378cb7718693e&with_genres=${id}`,
            );
            const category = await data.json();
            setCurrentCategory([...currentCategory, ...category?.results]);
            setIsLoading(false);
        };
        fetchCategory();
    }, []);
    return (<>
        <MovieCarousel partialVisbile responsive={responsive} deviceType={'desktop'}>
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
        </MovieCarousel>
    </>)
}
