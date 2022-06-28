import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {ReviewType, UserDetailsType} from "../../../types/AssetTypes";
import {EmptyFeedMessage, ReviewLink} from "../../components/ReviewList/ReviewList.css";
import {scrollToTop} from "../../../utils/fnScroll";
import {
    ActivityWrapper,
    IconContainer,
    ReviewCardDate,
    ReviewCardRatingText,
    ReviewCardTitle,
    ReviewCardWrapper, ReviewRatingContainer
} from "../../components/UserActivity/UserActivity.css";
import {PosterPhoto} from "../../components/PosterPhoto/PosterPhoto";
import Rating from "@mui/material/Rating";
import {AiOutlineComment, AiOutlineLike} from "react-icons/ai";
import {
    FeedWrapper,
    LeftFeedSelection,
    MiddleFeedSelection,
    RightFeedSelection,
    SelectFeedWrapper,
    UserWrapper
} from "./PageFeed.css";
import {RecommendationFeed} from "../../components/RecommendationFeed/RecommendationFeed";
import {Spinner} from "../../components/Spinner/Spinner";

type PagePrivatePropsType = {
    history: History,
    match: {
        params: { type: string }
    }
};

export const PageFeed: React.FC<PagePrivatePropsType> = ({history, match}) => {
    const [reviews, setReviews] = useState<ReviewType[]>([]);
    const [isFollowFeed, setIsFollowFeed] = useState<boolean>(match.params.type === 'following');
    const [isRecommendation, setIsRecommendation] = useState<boolean>(match.params.type === 'recommendations');
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            history.push("/login");
        }
        setIsFollowFeed(match.params.type === 'following');
        const getFeed = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }
            const {data} = await axios.get(`http://localhost:5000/api/review/${isFollowFeed ? 'getFeed' : 'getTrendingFeed'}`, config);
            setReviews(data?.feedReviews);
            setIsLoading(false);
        }
        getFeed();
    }, []);

    const onFollowingClick = () => {
        window.open("/feed/following", "_self");
    }

    const onTrendingClick = () => {
        window.open("/feed/trending", "_self");
    }

    const onRecommendationsClick = () => {
        window.open("/feed/recommendations", "_self");
    }


    return (
        <>
            <Spinner isLoading={isLoading}/>
            <SelectFeedWrapper>
                <LeftFeedSelection onClick={onFollowingClick} isActive={isFollowFeed}>following</LeftFeedSelection>
                <MiddleFeedSelection onClick={onRecommendationsClick} isActive={isRecommendation}>Recommendations</MiddleFeedSelection>
                <RightFeedSelection onClick={onTrendingClick} isActive={!isFollowFeed && !isRecommendation}>trending</RightFeedSelection>
            </SelectFeedWrapper>
        {!isRecommendation ? (
            <FeedWrapper>
                {reviews?.length < 1 ? (
                    <EmptyFeedMessage>
                        Oops! Looks like your feed is empty! Start by following another user or by checking out the <a href={'/feed/trending'}>Trending</a> page!
                    </EmptyFeedMessage>
                ) : reviews?.map((review) =>
                    (
                        <ReviewLink to={`/static/asset/${review?.movie_id}/review/${review?._id}`}
                                    onClick={scrollToTop}>
                            <ReviewCardWrapper>
                                <PosterPhoto movie_id={review?.movie_id}/>
                                <div>
                                    <ReviewCardTitle>
                                        {review?.title}
                                    </ReviewCardTitle>
                                    <ReviewCardDate>
                                        Posted on: {new Date(review?.date).toLocaleDateString()}
                                    </ReviewCardDate>
                                    <UserWrapper>
                                        by <a href={`/profiles/${review?.user_id}`}>{review?.username ?? 'unknown user'}</a>
                                    </UserWrapper>
                                    <ReviewRatingContainer>
                                        <Rating name="read-only" value={review?.rating} readOnly max={10}
                                                precision={0.5} size={"small"}/>
                                    </ReviewRatingContainer>
                                    <IconContainer>
                                        <AiOutlineLike/> <span>{review?.likes?.length} likes</span>
                                    </IconContainer>
                                    <IconContainer><AiOutlineComment/><span> {review?.comments?.length} comments</span>
                                    </IconContainer>
                                </div>
                            </ReviewCardWrapper>
                        </ReviewLink>
                    )
                )}
            </FeedWrapper>
        ) : (<RecommendationFeed history={history}/>)}
        </>
    )
};