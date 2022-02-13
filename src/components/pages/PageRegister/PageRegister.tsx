import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {RegisterWrapper, RegisterSubtext, RegisterTitle, RegisterForm} from "./PageRegister.css";
import {Button} from "@material-ui/core";
import axios from "axios";
import {History} from "history";

type PageRegisterPropsType = {
    history: History,
};

export const PageRegister: React.FC<PageRegisterPropsType> = ({history}) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(()=>{
        if (localStorage.getItem("authToken")) {
            history.push("/");
        }
    }, [history]);

    const onRegister = async (e: any) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (password !== confirmPassword) {
            setPassword('');
            setConfirmPassword('');

            setTimeout(() => {
                setError('');
            }, 5000)
            return setError("Passwords do not match");
        }


        try {
            const {data} = await axios.post("http://localhost:5000/api/auth/register", {username, email, password}, config);
            localStorage.setItem("authToken", data.token);

            history.push("/");
        } catch (error: any) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <RegisterWrapper>
            <RegisterForm onSubmit={onRegister}>
                <RegisterTitle>
                    Register
                </RegisterTitle>
                {error && <span>{error}</span>}
                <label htmlFor={"name"}>Username: </label>
                <input type={"text"} required id={"name"} placeholder={"Enter username"} value={username}
                       onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor={"email"}>Email: </label>
                <input type={"email"} required id={"email"} placeholder={"Enter email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor={"password"}>Password: </label>
                <input type={"password"} required id={"password"} placeholder={"Enter password"} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor={"confirm-password"}>Password: </label>
                <input type={"password"} required id={"confirm-password"} placeholder={"Confirm password"}
                       value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type={"submit"}>Register</Button>

                <RegisterSubtext>Already have an account? <Link to={"/login"}>Login</Link></RegisterSubtext>
            </RegisterForm>
        </RegisterWrapper>
    )
};