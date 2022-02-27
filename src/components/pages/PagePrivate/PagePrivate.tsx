import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {History} from "history";
import {useUser} from "../../../contexts/UserContext";
import {UserDetailsType} from "../../../types/AssetTypes";

type PagePrivatePropsType = {
    history: History,
};

export const PagePrivate: React.FC<PagePrivatePropsType> = ({history}) => {
    const [error, setError] = useState<string>('');
    const [privateData, setPrivateData] = useState<string>('');

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
                const {data } = await axios.get("/api/private", config);
                setPrivateData(data.data);
            } catch (e) {
                localStorage.removeItem("authToken");
                setError("You are not authorized. Please login");
            }
        }
        fetchPrivateData();
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }

    return (
        error ? <span>{error}</span> :
            <>
                <div>
                    {privateData}
                </div>
                <button onClick={logoutHandler}>Logout</button>
            </>
    )
};