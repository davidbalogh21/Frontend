import React, {useEffect, useState} from 'react';
import {FetchUrl} from '../../../types/Routing';
import {GenreTypes} from '../../../types/AssetTypes';
import {Link} from 'react-router-dom';
import {ItemSlider} from "../../components/ItemSlider/ItemSlider";
import {BackgroundContainer, CategoryButton, CategoryTitle} from "./PageCategories.css";
import {scrollToTop} from "../../../utils/fnScroll";
import {useLoading} from "../../../contexts/PageCategoriesLoadingContext";
import {Spinner} from "../../components/Spinner/Spinner";

export const PageCategories: React.FC = () => {
    const [genres, setGenres] = useState<GenreTypes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const {loading} = useLoading();
    console.log(loading);


    useEffect(() => {
        fetchGenres().then(r => {});
    }, []);

    const fetchGenres = async () => {
        const data = await fetch(FetchUrl.GENRES);
        const temp_genres = await data.json();
        setGenres(temp_genres?.genres);
    };

    return (
        <>
            <Spinner isLoading={loading}/>
            <BackgroundContainer>
                {genres?.map((genre) => (
                    <div>
                        <Link
                            to={`/static/movies/${genre?.id}`}
                            key={`id_${genre?.id}`}
                            onClick={scrollToTop}
                        >
                            <CategoryButton>
                                {genre?.name}
                            </CategoryButton>
                        </Link>
                        <ItemSlider id={genre?.id}/>
                    </div>
                ))}
            </BackgroundContainer>
        </>
    );
}
