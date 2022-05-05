import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {ReviewType, UserDetailsType} from "../../../types/AssetTypes";
import {
    FollowData,
    ModalLinkToProfile, ModalText, ModalTitle,
    ProfileDataWrapper, ProfileFollowers, ProfilePageWrapper,
    ProfilePicture,
    ProfilePictureWrapper,
    ProfileTitle
} from "../PageProfile/PageProfile.css";
import MovieLogo from "../../../assets/images/logo.png";
import {UserActivity} from "../../components/UserActivity/UserActivity";
import {AuthContext} from "../../../contexts/AuthContext";
import Modal from '@mui/material/Modal';
import {config} from "../../../utils/AxiosConfig";
import {ReviewLink} from "../../components/ReviewList/ReviewList.css";
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
import {FeedWrapper, LeftFeedSelection, RightFeedSelection, SelectFeedWrapper, UserWrapper} from "./PageFeed.css";

type PagePrivatePropsType = {
    history: History,
    match: {
        params: { type: string }
    }
};

export const PageFeed: React.FC<PagePrivatePropsType> = ({history, match}) => {
    const [reviews, setReviews] = useState<ReviewType[]>([]);
    const [isFollowFeed, setIsFollowFeed] = useState<boolean>(match.params.type === 'following');

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
        }
        getFeed();
    }, []);

    const onFollowingClick = () => {
        window.open("/feed/following", "_self");
    }

    const onTrendingClick = () => {
        window.open("/feed/trending", "_self");
    }


    return (
        <>
            <SelectFeedWrapper>
                <LeftFeedSelection onClick={onFollowingClick} isActive={isFollowFeed}>following</LeftFeedSelection>
                <RightFeedSelection onClick={onTrendingClick} isActive={!isFollowFeed}>trending</RightFeedSelection>
            </SelectFeedWrapper>
    <ProfilePageWrapper>
    <FeedWrapper>
                {reviews?.map((review) =>
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
        </ProfilePageWrapper>
        </>
    )
};