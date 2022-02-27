import React, {createContext, useContext, useEffect, useRef} from 'react';
import {UserDetailsType} from "../types/AssetTypes";
import axios from "axios";

const useUserService = () => {
    const userData = useRef<UserDetailsType>();

    const fetchPrivateData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        }

        try {
            const { data } = await axios.get("http://localhost:5000/api/auth/getUser", config);
            userData.current = data.data;
        } catch (e) {
            localStorage.removeItem("authToken");
        }
    }

    useEffect(()=> {
        fetchPrivateData();
    }, []);

    return {
        userData,
    };
};

// @ts-ignore
export const UserContext = createContext<ReturnType<typeof useUserService>>(null);

// @ts-ignore
export const UserProvider = ({children}) => {
    const service = useUserService();
    return <UserContext.Provider value={service}> {children} </UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
