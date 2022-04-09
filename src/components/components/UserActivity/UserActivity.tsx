import React, {useEffect, useState} from 'react'
import {
    ActivityTitle,
    ActivityWrapper, IconContainer,
    ReviewCardDate,
    ReviewCardRatingText,
    ReviewCardTitle,
    ReviewCardWrapper, ReviewRatingContainer
} from "./UserActivity.css";
import axios from "axios";
import {ReviewType} from "../../../types/AssetTypes";
import {PosterPhoto} from "../PosterPhoto/PosterPhoto";
import {scrollToTop} from "../../../utils/fnScroll";
import {ReviewLink} from "../ReviewList/ReviewList.css";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import {AiOutlineLike, AiOutlineComment} from 'react-icons/ai';

type UserActivityPropsType = {
    user_id: string;
}

export const UserActivity: React.FC<UserActivityPropsType> = ({user_id}) => {
    const [userReviews, setUserReviews] = useState<ReviewType[]>();

    const getReviewsByUser = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {
            const {data} = await axios.post('http://localhost:5000/api/review/getReviewsByUserId', {id: user_id}, config);
            setUserReviews(data?.reviews);
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        getReviewsByUser().then(r => {
        });
    }, [user_id]);

    return (
        <>
            <ActivityTitle>
                My reviews:
            </ActivityTitle>
            <ActivityWrapper>
                {userReviews?.map((review) =>
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
                                    <ReviewCardRatingText>
                                        My rating: {review?.rating}/10
                                    </ReviewCardRatingText>
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
            </ActivityWrapper>
        </>
    )
};