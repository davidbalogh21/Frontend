import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    CommentButton,
    CommentContainer, CommentDate, CommentForm, CommentInput, CommentSectionContainer, CommentText,
    CommentTitle, CommentUser, EmptyCommentText, FollowButton, LikeContainer, LikeIconButton, LikeNumber,
    PageWrapper,
    Poster, RatingContainer, ReviewContainer, ReviewText, ReviewTitle, ReviewUser,
    ReviewWrapper
} from './PageReview.css';
import {History} from 'history';
import {CommentType, MovieAssetType, ReviewType, UserDetailsType} from '../../../types/AssetTypes';
import axios from "axios";
import {useUser} from "../../../contexts/UserContext";
import {config} from "../../../utils/AxiosConfig";
import {ReviewFormTitle, ReviewMovieTagline} from "../PageAddReview/PageAddReview.css";
import Rating from "@mui/material/Rating";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import {CommentSection} from "../../components/CommentSection/CommentSection";
import {AuthContext} from "../../../contexts/AuthContext";
import {Spinner} from "../../components/Spinner/Spinner";

type PageReviewPropsType = {
    history: History,
    match: {
        params: {
            id: number;
            movie_id: number;
        }
    }
};

export const PageReview: React.FC<PageReviewPropsType> = ({history, match}) => {
    const [movie, setMovie] = useState<MovieAssetType>(Object);
    const [review, setReview] = useState<ReviewType>(Object);
    const [isReviewLiked, setIsReviewLiked] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState<number>();
    const [isUserFollowed, setIsUserFollowed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const replyRef = useRef(null);
    const userData = useContext(AuthContext);
    let rating;

    const fetchMovie = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/${match.params.movie_id}?api_key=593c4bf64054350abc1378cb7718693e`,
        );
        setMovie(data);
    };

    const fetchReview = async () => {
        const {data} = await axios.post(`http://localhost:5000/api/review/getReviewById`, {id: match.params.id}, config);
        setReview(data?.review);
        rating = data?.review?.rating;
    }

    const likeHandlerReview = async (review: ReviewType) => {
        setIsReviewLiked(!isReviewLiked);
        if (isReviewLiked) {
            setNumberOfLikes(numberOfLikes as number - 1)
        } else {
            setNumberOfLikes(review?.likes?.length + 1)
        }
        await axios.post("http://localhost:5000/api/review/likeReview", {
            user_id: userData?._id,
            review_id: review?._id
        }, config);
    }

    const didUserLikeReview = (review: ReviewType, userSearch: UserDetailsType): boolean => {
        return !!review?.likes?.find(user => user?.email === userSearch?.email);
    }

    useEffect(() => {
        fetchMovie().then(() => {
        });
        fetchReview().then(() => {
        });
        setTimeout(()=>{
            setIsLoading(false);
        }, 250);
    }, []);

    useEffect(() => {
        if (review) {
            setNumberOfLikes(review?.likes?.length);
            setIsReviewLiked(didUserLikeReview(review, userData));
        }
        setIsUserFollowed(isUserFollowedFc());
    }, [review, userData]);

    const isUserFollowedFc = (): boolean => {
        return !!userData?.follows?.find(user => user?.username === review?.username);
    }

    const onFollowButtonClick = async () => {
        setIsUserFollowed(!isUserFollowed);
        await axios.post("http://localhost:5000/api/auth/followUser", {
            user_id: userData?._id,
            follow_id: review?.user_id
        }, config);
    }

    // @ts-ignore
    return (
        <>
            <Spinner isLoading={isLoading}/>
            <PageWrapper>
                <ReviewWrapper>
                    <Poster
                        src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`}
                    />
                    <ReviewContainer>
                        <ReviewFormTitle>
                            <a href={`/static/asset/${movie?.id}`}>{movie?.original_title}</a>
                        </ReviewFormTitle>
                        <ReviewMovieTagline>
                            {movie?.tagline}
                        </ReviewMovieTagline>

                        <ReviewTitle>
                            {review?.title ?? 'Placeholder title'}
                        </ReviewTitle>
                        <ReviewUser>
                            by <a
                            href={`/profiles/${review?.user_id}`}>{review?.username ?? 'unknown user'}</a> on {new Date(review?.date).toLocaleDateString()}
                            {!!userData.username && <FollowButton onClick={onFollowButtonClick}
                                                                  isFollowed={isUserFollowed}>{isUserFollowed ? 'following' : 'follow'}</FollowButton>}
                        </ReviewUser>
                        <ReviewText>
                            {review?.description}
                        </ReviewText>
                        <RatingContainer>
                            <Rating name="read-only" value={review?.rating ?? 7} readOnly max={10} precision={0.5}/>
                        </RatingContainer>
                        <LikeIconButton onClick={() => likeHandlerReview(review)}
                                        color={isReviewLiked ? 'primary' : 'default'} isDisabled={!userData.username}
                                        title={'You must be logged in to like!'}>
                            {numberOfLikes}
                            <ThumbUpIcon/>
                        </LikeIconButton>
                    </ReviewContainer>
                </ReviewWrapper>
                <CommentTitle>
                    Comments:
                </CommentTitle>
                <CommentSection review={review} match={match}/>
            </PageWrapper>
        </>)
};