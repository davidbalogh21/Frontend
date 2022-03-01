import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {UserDetailsType} from "../../../types/AssetTypes";
import {FormPicture, FormPictureWrapper, PageWrapper} from "../PageLogin/PageLogin.css";
import {
    InfoData,
    InfoTitle,
    InfoWrapper, LogoutButton,
    ProfileDataWrapper, ProfilePageWrapper,
    ProfilePicture,
    ProfilePictureWrapper,
    ProfileTitle
} from "./PageProfile.css";
import MovieLogo from "../../../assets/images/logo.png";
import {UserActivity} from "../../components/UserActivity/UserActivity";


type PagePrivatePropsType = {
    history: History,
};

export const PageProfile: React.FC<PagePrivatePropsType> = ({history}) => {
    const [profileData, setProfileData] = useState<UserDetailsType>(Object);

    useEffect(()=>{
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
                const { data } = await axios.get("http://localhost:5000/api/auth/getUser", config);
                setProfileData(data.data);
            } catch (e) {
                localStorage.removeItem("authToken");
            }
        }
        fetchPrivateData();
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }

    // @ts-ignore
    return (
        <ProfilePageWrapper>
                <ProfileDataWrapper>
                    <ProfilePictureWrapper>
                        <ProfilePicture  src={MovieLogo} alt="Movie logo"/>
                    </ProfilePictureWrapper>
                    <ProfileTitle>
                        Your profile
                    </ProfileTitle>
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
    )
};