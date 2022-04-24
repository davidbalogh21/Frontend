import React, {useContext, useEffect, useState} from 'react';
import {History} from "history";
import {SearchTitle} from "./PageSearch.css";
import axios from "axios";
import {MovieAssetType} from "../../../types/AssetTypes";
import {Title} from "../PageAssetDetails/PageAssetDetails.css";
import {Card, CardWrapper} from "../../styles/GridStyles.css";
import {Link} from "react-router-dom";
import {scrollToTop} from "../../../utils/fnScroll";
import RatingColor from "../../../utils/fnRatingColor";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";

type PageSearchPropsType = {
    history: History,
};

export const PageSearch: React.FC<PageSearchPropsType> = ({history}) => {
    const searchQuery = history.location.search.substring(history.location.search.indexOf('=') + 1);
    const [isLoading, setIsLoading] = useState(true);
    const [searchResult, setSearchResult] = useState<MovieAssetType[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);

    const fetchSearchData = async () => {
        const {data} =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=593c4bf64054350abc1378cb7718693e&query=${searchQuery}&page=${pageNum}`);
        console.log(data);
        setSearchResult([...searchResult, ...data?.results]);
        setIsLoading(false);
    };

    window.onscroll = function() {
        if (
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight
        ) {
            setPageNum(pageNum + 1);
        }
    };

    useEffect(() => {
        fetchSearchData();
    }, [pageNum]);

    console.log("searchResult", searchResult);

    return (
        <div>
            {isLoading ? (
                <>loading</>
            ) : null}
            {searchResult?.length > 0 ? (
                <SearchTitle>
                  Search results for <span>{searchQuery}</span>
                </SearchTitle>) : (
                <SearchTitle>
                    No search results for <span>{searchQuery}</span>. Please try something else!
                </SearchTitle>
                )}
            <CardWrapper id="category">
                {searchResult?.map((movie) => (
                    <Link
                        to={`/static/asset/${movie.id}`}
                        style={{ textDecoration: 'none' }}
                        key={`id_${movie.original_title}`}
                        onClick={scrollToTop}
                    >
                        <Card>
                            <img
                                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                                alt={`movieposter_${movie.id}`}
                            />
                            <h2>{movie.original_title}</h2>
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
            </CardWrapper>
        </div>

    )
};