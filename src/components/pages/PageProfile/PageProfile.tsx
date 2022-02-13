import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {UserDetailsType} from "../../../types/AssetTypes";

type PagePrivatePropsType = {
    history: History,
};

export const PageProfile: React.FC<PagePrivatePropsType> = ({history}) => {
    const [profileData, setProfileData] = useState<UserDetailsType>();

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

    return (
            <>
                <div>
                    {profileData?.username}
                </div>
                <div>
                    {profileData?.email}
                </div>
                <button onClick={logoutHandler}>Logout</button>
            </>
    )
};