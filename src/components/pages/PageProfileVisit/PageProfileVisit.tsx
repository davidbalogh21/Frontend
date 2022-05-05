import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {UserDetailsType} from "../../../types/AssetTypes";
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
import {FollowButton} from "../PageReview/PageReview.css";
import {ButtonWrapper, FollowButtonProfile} from "./PageProfileVisit.css";

type PagePrivatePropsType = {
    history: History,
    match: {
        params: { id: string }
    }
};

export const PageProfileVisit: React.FC<PagePrivatePropsType> = ({history, match}) => {
    const [profileData, setProfileData] = useState<UserDetailsType>(Object);
    const [numberOfFollowers, setNumberOfFollowers] = useState<number>(0);
    const [followers, setFollowers] = useState<UserDetailsType[]>([]);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [isOpenFollowers, setIsOpenFollowers] = useState(false);
    const [isUserFollowed, setIsUserFollowed] = useState<boolean>(false);
    const userData = useContext(AuthContext);

    useEffect(() => {
        const getUserData = async () => {
            const {data} = await axios.post(`http://localhost:5000/api/auth/getUserById`, {user_id: match?.params.id}, config);
            setProfileData(data.user);
        }
        getUserData();
    }, []);

    useEffect(() => {
        const getFollowers = async () => {
                const {data} = await axios.get(`http://localhost:5000/api/auth/getFollowedBy?user_id=${match.params.id}`)
                console.log(data);
            setFollowers(data?.usersWhoFollow);
                setNumberOfFollowers(data.usersWhoFollow?.length);
                setIsUserFollowed(isUserFollowedFc());
        }
        getFollowers();
    }, [profileData, userData]);

    const isUserFollowedFc = (): boolean => {
        return !!userData?.follows?.find(user => user?.username === profileData?.username);
    }

    const onFollowButtonClick = async () => {
        setIsUserFollowed(!isUserFollowed);
        await axios.post("http://localhost:5000/api/auth/followUser", {user_id: userData?._id, follow_id: match.params.id}, config).then(()=>{window.location.reload()});
    }

    const handleModalFollowing = () => {
        setIsOpenFollowing(!isOpenFollowing);
    }

    const handleModalFollowers = () => {
        setIsOpenFollowers(!isOpenFollowers);
    }

    return (
        <ProfilePageWrapper>
            <ProfileDataWrapper>
                <ProfilePictureWrapper>
                    <ProfilePicture src={MovieLogo} alt="Movie logo"/>
                </ProfilePictureWrapper>
                <ProfileTitle>
                    {profileData?.username}
                </ProfileTitle>
                <ProfileFollowers>
                    <FollowData
                        onClick={handleModalFollowing}>{profileData?.follows?.length}</FollowData> following    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FollowData onClick={handleModalFollowers}>{numberOfFollowers}</FollowData> followers
                </ProfileFollowers>
                <Modal
                    open={isOpenFollowing}
                    onClose={handleModalFollowing}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ModalText>
                        <ModalTitle>
                            {profileData?.username} is following:
                        </ModalTitle>{profileData?.follows?.map(user => (
                        <ModalLinkToProfile href={`/profiles/${user?._id}`}>{user?.username}</ModalLinkToProfile>
                    ))}</ModalText>
                </Modal>
                <Modal
                    open={isOpenFollowers}
                    onClose={handleModalFollowers}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ModalText>
                        <ModalTitle>
                            {profileData?.username} is followed by:
                        </ModalTitle>
                        {followers?.map(user => (
                            <ModalLinkToProfile href={`/profiles/${user._id}`}>{user?.username}</ModalLinkToProfile>))}
                    </ModalText>
                </Modal>
                <ButtonWrapper>
                <FollowButtonProfile onClick={onFollowButtonClick} isFollowed={isUserFollowed}>{isUserFollowed ? 'FOLLOWING' : 'FOLLOW'}</FollowButtonProfile>
                </ButtonWrapper>
            </ProfileDataWrapper>
            <UserActivity user_id={profileData?._id}/>
        </ProfilePageWrapper>
    )
};