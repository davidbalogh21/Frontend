import React, {useEffect, useState} from 'react';
import {FetchUrl} from '../../../types/Routing';
import {GenreTypes} from '../../../types/AssetTypes';
import {Link} from 'react-router-dom';
import {ItemSlider} from "../../components/ItemSlider/ItemSlider";
import {BackgroundContainer, CategoryTitle} from "./PageCategories.css";
import {scrollToTop} from "../../../utils/fnScroll";

export const PageCategories: React.FC =() => {
    const [genres, setGenres] = useState<GenreTypes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    useEffect(() => {
        fetchGenres().then(r => {
            console.log(r);
        });
    }, []);

    const fetchGenres = async () => {
        const data = await fetch(FetchUrl.GENRES);
        const temp_genres = await data.json();
        setGenres(temp_genres.genres);
        setIsLoading(false);
    };

    return (
        <>
            <BackgroundContainer>
            {genres.map((genre) => (
                <div>
                <Link
                    to={`/static/movies/${genre.name.toLocaleLowerCase()}`}
                    style={{textDecoration: 'none'}}
                    key={`id_${genre.id}`}
                    onClick={scrollToTop}
                >
                    <CategoryTitle>{genre.name}</CategoryTitle>
                </Link>
                    <ItemSlider id={genre.id}/>
                </div>
            ))}
            </BackgroundContainer>
        </>
    );
}
