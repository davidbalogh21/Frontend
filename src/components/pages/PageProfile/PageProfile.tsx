import React, {useContext, useEffect, useState, Suspense} from 'react';
import axios from 'axios';
import {History} from "history";
import {UserDetailsType} from "../../../types/AssetTypes";
import {
    FollowData,
    InfoData,
    InfoTitle,
    InfoWrapper, LogoutButton, ModalLinkToProfile, ModalText, ModalTitle,
    ProfileDataWrapper, ProfileFollowers, ProfilePageWrapper,
    ProfilePicture,
    ProfilePictureWrapper,
    ProfileTitle
} from "./PageProfile.css";
import MovieLogo from "../../../assets/images/logo.png";
import {UserActivity} from "../../components/UserActivity/UserActivity";
import {AuthContext} from "../../../contexts/AuthContext";
import Modal from '@mui/material/Modal';
import {Spinner} from "../../components/Spinner/Spinner";

type PagePrivatePropsType = {
    history: History,
};

export const PageProfile: React.FC<PagePrivatePropsType> = ({history}) => {
    const [profileData, setProfileData] = useState<UserDetailsType>(Object);
    const [numberOfFollowers, setNumberOfFollowers] = useState<number>(0);
    const [followers, setFollowers] = useState<UserDetailsType[]>([]);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [isOpenFollowers, setIsOpenFollowers] = useState(false);
    const userData = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            history.push("/login");
        }

        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            try {
                const {data} = await axios.get("http://localhost:5000/api/auth/getUser", config);
                setProfileData(data.data);
            } catch (e) {
                localStorage.removeItem("authToken");
            }
        }
        fetchPrivateData();
    }, [history]);

    useEffect(() => {
        const getFollowers = async () => {
            if (userData) {
                const {data} = await axios.get(`http://localhost:5000/api/auth/getFollowedBy?user_id=${userData?._id}`)
                setFollowers(data?.usersWhoFollow);
                setNumberOfFollowers(data.usersWhoFollow?.length);
                setIsLoading(false);
            }
        }
        getFollowers();
    }, [userData]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }

    const handleModalFollowing = () => {
        setIsOpenFollowing(!isOpenFollowing);
    }

    const handleModalFollowers = () => {
        setIsOpenFollowers(!isOpenFollowers);
    }

    // @ts-ignore
    return (
        <>
            <Spinner isLoading={isLoading}/>
            <ProfilePageWrapper>
                <ProfileDataWrapper>
                    <ProfilePictureWrapper>
                        <ProfilePicture src={MovieLogo} alt="Movie logo"/>
                    </ProfilePictureWrapper>
                    <ProfileTitle>
                        Your profile
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
                                You are following:
                            </ModalTitle>{userData?.follows?.map(user => (
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
                                You are followed by:
                            </ModalTitle>
                            {followers?.map(user => (
                                <ModalLinkToProfile
                                    href={`/profiles/${user._id}`}>{user?.username}</ModalLinkToProfile>))}
                        </ModalText>
                    </Modal>
                    <InfoTitle>
                        Username:
                    </InfoTitle>
                    <InfoWrapper>
                        <InfoData>
                            {profileData?.username}
                        </InfoData>
                    </InfoWrapper>
                    <InfoTitle>
                        Email:
                    </InfoTitle>
                    <InfoWrapper>
                        <InfoData>
                            {profileData?.email}
                        </InfoData>
                    </InfoWrapper>
                    <InfoTitle>
                        Created on:
                    </InfoTitle>
                    <InfoWrapper>
                        <InfoData>
                            {new Date(profileData?.created).toLocaleDateString() ?? 'unknown date'}
                        </InfoData>
                    </InfoWrapper>
                    <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
                </ProfileDataWrapper>
                <UserActivity user_id={profileData._id}/>
            </ProfilePageWrapper>
            </>
    )
};