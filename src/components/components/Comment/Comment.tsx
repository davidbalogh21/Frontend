import {CommentType, ReviewType} from "../../../types/AssetTypes";
import axios from "axios";
import {config} from "../../../utils/AxiosConfig";
import {CommentContainer, CommentDate, CommentText, CommentUser} from "../../pages/PageReview/PageReview.css";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import React, {useContext, useEffect, useRef, useState} from "react";
import {useUser} from "../../../contexts/UserContext";
import {AuthContext} from "../../../contexts/AuthContext";

type CommentPropsType = {
    comment: CommentType;
    review: ReviewType;
}

export const Comment: React.FC<CommentPropsType> = ({comment, review}) => {
    const userData = useContext(AuthContext);
    const replyRef = useRef(null);
    const [isCommentLiked, setIsCommentLiked] = useState<boolean>(false);
    const [numberOfLikes, setNumberOfLikes] = useState<number>();
    const [commentData, setCommentData] = useState<CommentType>(Object);

    const replyHandler = () => {
        // @ts-ignore
        replyRef.current.focus();
    }

    const fetchComment = async () => {
        const {data} = await axios.get(`http://localhost:5000/api/comment/getComment/?comment_id=${comment?._id}`)
        setCommentData(data.comment);
    }

    const likeHandlerComment = async (comment: CommentType) => {
        setIsCommentLiked(!isCommentLiked);
        if (isCommentLiked) {
            setNumberOfLikes(numberOfLikes as number - 1)
        } else {
            setNumberOfLikes(comment?.likes?.length + 1)
        }
        await axios.post("http://localhost:5000/api/comment/likeComment", {user_id: userData?._id, comment_id: comment._id, review_id: review?._id}, config);
    }

    const didUserLikeComment = (commentData: CommentType): boolean => {
        return !!commentData?.likes?.find(user => user.email === userData?.email);
    }

    useEffect(()=>{
        setIsCommentLiked(didUserLikeComment(commentData));
        setNumberOfLikes(commentData?.likes?.length);
    }, [commentData]);

    useEffect(()=>{
        fetchComment();
    }, []);

    return (
        <CommentContainer>
            <CommentUser>
                <a href={`/profiles/${commentData?.user_id}`}>{commentData?.username ?? 'unknown user'}</a>
            </CommentUser>
            <CommentDate>
                on {new Date(commentData?.date).toLocaleDateString()}
            </CommentDate>
            <CommentText>
                {commentData?.description}
            </CommentText>
            <IconButton onClick={() => likeHandlerComment(commentData)} color={isCommentLiked ? 'primary' : 'default'}>
                {numberOfLikes}
                <ThumbUpIcon />
            </IconButton>
            <IconButton onClick={replyHandler}>
                <ReplyIcon/>
            </IconButton>
        </CommentContainer>
    )
}

