import React, {useEffect, useState} from 'react'
import axios from "axios";
import {ReviewType} from "../../../types/AssetTypes";
import Rating from '@mui/material/Rating';
import {
    AddReviewButton,
    ReviewContainer, ReviewDate,
    ReviewLink,
    ReviewRatingContainer, ReviewRatingText,
    ReviewsWrapper,
    ReviewTitle,
    ReviewUser
} from "./ReviewList.css";
import RatingColor from "../../../utils/fnRatingColor";
import {scrollToTop} from "../../../utils/fnScroll";


type ReviewListPropTypes = {
    movie_id: string;
}

export const ReviewList: React.FC<ReviewListPropTypes> = ({movie_id}) => {
    const [reviewObject, setReviewObject] = useState<ReviewType[]>();

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const getReviews = async () => {
        try {
            const {data} = await axios.post(`http://localhost:5000/api/review/getReviewsByMovieId`, {movie_id}, config);
            setReviewObject(data.reviews);
        } catch (error: any) {

        }
    };

    useEffect(() => {
        getReviews().then(r => {
        });
    }, []);


    return (
        <>
            {reviewObject?.length ?
                <ReviewsWrapper>
                    {reviewObject?.map((review) => (
                        <ReviewLink to={`/static/asset/${movie_id}/review/${review?._id}`} onClick={scrollToTop}>
                            <ReviewContainer>
                                <ReviewTitle>{review?.title}</ReviewTitle>
                                <ReviewUser>by {review?.username ?? 'unknown'}</ReviewUser>
                                <ReviewDate>Date added: {new Date(review?.date).toLocaleDateString()}</ReviewDate>
                                <ReviewRatingText
                                    style={{color: RatingColor(review?.rating)}}>Rating: {review?.rating}/10</ReviewRatingText>
                                <ReviewRatingContainer>
                                    <Rating name="read-only" value={review?.rating} readOnly max={10} precision={0.5}/>
                                </ReviewRatingContainer>
                            </ReviewContainer>
                        </ReviewLink>
                    ))}
                </ReviewsWrapper>
                        : <>NO REVIEWS YET! BE THE FIRST TO <ReviewLink to={`/static/asset/${movie_id}/review`}
                                                                        onClick={scrollToTop}><AddReviewButton>ADD A
                        REVIEW</AddReviewButton></ReviewLink></>}
        </>)
};

