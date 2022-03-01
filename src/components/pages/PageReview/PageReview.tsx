import React, {useEffect, useRef, useState} from 'react';
import {
    CommentButton,
    CommentContainer, CommentDate, CommentForm, CommentInputWrapper, CommentSectionContainer, CommentText,
    CommentTitle, CommentUser, EmptyCommentText,
    PageWrapper,
    Poster, RatingContainer, ReviewContainer, ReviewText, ReviewTitle, ReviewUser,
    ReviewWrapper
} from './PageReview.css';
import {History} from 'history';
import {MovieAssetType, ReviewType} from '../../../types/AssetTypes';
import axios from "axios";
import {useUser} from "../../../contexts/UserContext";
import {config} from "../../../utils/AxiosConfig";
import {ReviewFormTitle, ReviewMovieTagline} from "../PageAddReview/PageAddReview.css";
import Rating from "@mui/material/Rating";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import ReplyIcon from '@mui/icons-material/Reply';
import {FormInput, InputWrapper} from '../PageLogin/PageLogin.css'

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
    const replyRef = useRef(null);
    const [formComment, setFormComment] = useState<string>('');
    const {userData} = useUser();
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

    const commentHandler = async (e: any) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        if (userData.current) {
            try {
                const {data} = await axios.post(`http://localhost:5000/api/comment/addComment`, {
                    review_id: match.params.id,
                    user_id: userData.current._id,
                    username: userData.current?.username,
                    description: formComment
                }, config);
                window.location.reload();
            } catch (e: any) {
                console.log(e);
            }
        }
    };

    const replyHandler = () => {
        // @ts-ignore
        replyRef.current.focus();
    }

    useEffect(() => {
        fetchMovie().then(result => console.log("SUCCESSFUL FETCH", movie));
        fetchReview().then(result => console.log("SUCCESSFUL FETCH", review));
    }, []);

    return <PageWrapper>
        <ReviewWrapper>
            <Poster
                src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`}
            />
            <ReviewContainer>
                <ReviewFormTitle>
                    {movie?.original_title}
                </ReviewFormTitle>
                <ReviewMovieTagline>
                    {movie?.tagline}
                </ReviewMovieTagline>

                <ReviewTitle>
                    {review?.title ?? 'Placeholder title'}
                </ReviewTitle>
                <ReviewUser>
                    by {review?.username ?? 'unknown user'} on {new Date(review?.date).toLocaleDateString()}
                </ReviewUser>
                <ReviewText>
                    {review?.description}
                </ReviewText>
                <Rating name="read-only" value={review?.rating ?? 7} readOnly max={10} precision={0.5}/>
            </ReviewContainer>
        </ReviewWrapper>
        <CommentTitle>
            Comments:
        </CommentTitle>
        <CommentSectionContainer>
            { review?.comments?.length ? review?.comments?.map((comment) => (
            <CommentContainer>
                <CommentUser>
                    {comment?.username ?? 'unknown user'}
                </CommentUser>
                <CommentDate>
                    on {new Date(comment?.date).toLocaleDateString()}
                </CommentDate>
                <CommentText>
                    {comment?.description}
                </CommentText>
                <IconButton>
                    <ThumbUpIcon/>
                </IconButton>
                <IconButton onClick={replyHandler}>
                    <ReplyIcon/>
                </IconButton>
            </CommentContainer>
            )) : <EmptyCommentText>No comments yet! Be the first to add a comment!</EmptyCommentText>}
            <CommentForm onSubmit={commentHandler}>
                <InputWrapper>
                    <CommentInputWrapper
                        type={"text"} required id={"formComment"} ref={replyRef} placeholder={userData ? "Add your comment here..." : "YOU HAVE TO BE LOGGED IN TO CONTINUE!"} value={formComment}
                        onChange={(e) => setFormComment(e.target.value)}
                    />
                    <CommentButton type={'submit'} notLoggedIn={!userData}>SUBMIT</CommentButton>
                </InputWrapper>
            </CommentForm>
        </CommentSectionContainer>
    </PageWrapper>
};