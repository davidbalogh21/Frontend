import React, {useContext, useRef, useState} from 'react'
import {
    CommentButton,
    CommentContainer,
    CommentDate, CommentForm, CommentInputWrapper, CommentSectionContainer,
    CommentText,
    CommentUser,
    EmptyCommentText
} from "../../pages/PageReview/PageReview.css";
import {InputWrapper} from "../../pages/PageLogin/PageLogin.css";
import {CommentType, ReviewType} from "../../../types/AssetTypes";
import {Comment} from "../Comment/Comment";
import axios from "axios";
import {useUser} from "../../../contexts/UserContext";
import {AuthContext} from "../../../contexts/AuthContext";

type CommentSectionPropsType = {
    review: ReviewType;
    match: {
        params: {
            id: number;
            movie_id: number;
        }
    };
}

export const CommentSection: React.FC<CommentSectionPropsType> = ({review, match}) => {
    const userData = useContext(AuthContext);
    const [formComment, setFormComment] = useState<string>('');
    const replyRef = useRef(null);
    console.log(userData);

    const commentHandler = async (e: any) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        if (userData) {
            try {
                const {data} = await axios.post(`http://localhost:5000/api/comment/addComment`, {
                    review_id: match.params.id,
                    user_id: userData._id,
                    username: userData?.username,
                    description: formComment
                }, config);
                window.location.reload();
            } catch (e: any) {
                console.log(e);
            }
        }
    };


    return (
        <CommentSectionContainer>
            { review?.comments?.length ? review?.comments?.map((comment) => (
            <Comment comment={comment} review={review}/>
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
    )
}