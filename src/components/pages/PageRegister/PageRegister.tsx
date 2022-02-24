import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {RegisterWrapper, RegisterSubtext, RegisterTitle, RegisterForm} from "./PageRegister.css";
import {Button} from "@material-ui/core";
import axios from "axios";
import {History} from "history";
import MovieLogo from "../../../assets/images/logo.png";
import {
    Form,
    FormLinkText,
    FormButton,
    FormInput,
    FormPicture,
    FormPictureWrapper,
    FormTitle,
    InputWrapper,
    PageWrapper,
    FormLink, ErrorMessage
} from '../PageLogin/PageLogin.css';

type PageRegisterPropsType = {
    history: History,
};

export const PageRegister: React.FC<PageRegisterPropsType> = ({history}) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    /*useEffect(()=>{
        if (localStorage.getItem("authToken")) {
            history.push("/");
        }
    }, [history]);*/

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
        <PageWrapper>
            <Form onSubmit={onRegister}>
                <FormPictureWrapper>
                    <FormPicture src={MovieLogo} alt="Movie logo"/>
                </FormPictureWrapper>
                <FormTitle>
                    Register
                </FormTitle>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <InputWrapper>
                <FormInput type={"text"} required id={"name"} placeholder={"Enter username"} value={username}
                       onChange={(e) => setUsername(e.target.value)}/>

                <FormInput type={"email"} required id={"email"} placeholder={"Enter email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>

                <FormInput type={"password"} required id={"password"} placeholder={"Enter password"} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>

                <FormInput type={"password"} required id={"confirm-password"} placeholder={"Confirm password"}
                       value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <FormButton type={"submit"}>REGISTER</FormButton>
                </InputWrapper>
                <FormLinkText>Already have an account? <FormLink to={"/login"}>Login</FormLink></FormLinkText>
            </Form>
        </PageWrapper>
    )
};