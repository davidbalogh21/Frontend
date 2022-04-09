import React, { createContext, useState, useEffect } from 'react';
import {UserDetailsType} from "../types/AssetTypes";
import axios from "axios";

const defaultUser: UserDetailsType = {
    follows: [],
    email: '',
    username: '',
    _id: '',
    created: new Date (Date.now().toLocaleString()),
}

export const AuthProvider: React.FC = (props) => {
    const [userData, setUserData] = useState<UserDetailsType>(defaultUser);

    const fetchPrivateData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        }

        try {
            const { data } = await axios.get("http://localhost:5000/api/auth/getUser", config);
            setUserData(data.data);
        } catch (e) {
            localStorage.removeItem("authToken");
        }
    }

    useEffect(()=> {
        fetchPrivateData();
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const AuthContext = createContext<UserDetailsType>(defaultUser);
