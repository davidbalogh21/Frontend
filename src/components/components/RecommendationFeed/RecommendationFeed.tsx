import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {ReviewType, UserDetailsType} from "../../../types/AssetTypes";
import {AuthContext} from "../../../contexts/AuthContext";
import {RecommendationFeedWrapper, RecommendationTitle} from "./RecommendationFeed.css";
import {RecommendationSlider} from "../RecommendationSlider/RecommendationSlider";
import {useLoading} from "../../../contexts/PageCategoriesLoadingContext";
import {Spinner} from "../Spinner/Spinner";

type PageRecommendationFeedPropsType = {
    history: History,
};

export const RecommendationFeed: React.FC<PageRecommendationFeedPropsType> = ({history}) => {
    const [userReviews, setUserReviews] = useState<ReviewType[]>([]);
    const [likedReviews, setLikedReviews] = useState<ReviewType[]>([]);
    const [mergedReviews, setMergedReviews] = useState<ReviewType[]>([]);
    const [uniqueFeed, setUniqueFeed] = useState<ReviewType[]>([]);
    const userData = useContext(AuthContext);
    const {loading} = useLoading();

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
    }

    const getReviewsByUser = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/api/review/getReviewsByUser', config);
            setUserReviews(data?.reviews);
        } catch (e) {
            console.log(e);
        }
    };

    const getLikedReviewsByUser = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/review/getLikedReviews', config);
            setLikedReviews(data?.reviewsLikedByUser);
        } catch (e) {
            localStorage.removeItem("authToken");
        }
    };

    useEffect(()=>{
        getReviewsByUser().then(()=>{});
        getLikedReviewsByUser().then(()=>{});
    }, [])

    useEffect(()=>{
        if (likedReviews && userReviews) {
            setMergedReviews([...userReviews, ...likedReviews]);
        }
    }, [likedReviews, userReviews])

    return (
        <>
            <Spinner isLoading={loading}/>
        {mergedReviews ? (
                <RecommendationFeedWrapper>
                    {mergedReviews?.map((review) => (
                        <>
                            <RecommendationSlider review={review} isLiked={false} />
                        </>
                    ))}

                </RecommendationFeedWrapper>
            ) : (<div>no data</div>)}
        </>
    )
};