import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {History} from 'history';
import {
    DescriptionText,
    ErrorMessage,
    Form, FormButton,
    FormInput, FormLink, FormLinkText,
    FormPicture,
    FormPictureWrapper,
    FormTitle,
    InputWrapper, PageWrapper
} from "../PageLogin/PageLogin.css";
import MovieLogo from "../../../assets/images/logo.png";

type ResetPagePropsType = {
    history: History,
    match: {
        params: { resetToken: string }
    }
};

export const PageReset: React.FC<ResetPagePropsType> = ({history, match}) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    console.log(match);

    const resetPasswordHandler = async (e: any) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Passwords don't match");
        }

        try {
            const {data} = await axios.put(
                `http://localhost:5000/api/auth/resetPassword/${match.params.resetToken}`,
                {
                    password,
                },
                config
            );

            console.log(data);
            setSuccess(data.data);
        } catch (error: any) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <PageWrapper>
            <Form onSubmit={resetPasswordHandler}>
                <FormPictureWrapper>
                    <FormPicture src={MovieLogo} alt="Movie logo"/>
                </FormPictureWrapper>
                <FormTitle>
                    Password Reset
                </FormTitle>
                <DescriptionText>
                    You requested a password reset! Please input your new password, after which you will be redirected to the login screen!
                </DescriptionText>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && (
                    <span className="success-message">
                            {success} <Link to="/login">Login</Link></span>)}
                <InputWrapper>
                    <FormInput type="password"
                               required
                               id="password"
                               placeholder="Enter new password"
                               autoComplete="true"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>

                    <FormInput type="password"
                               required
                               id="confirmpassword"
                               placeholder="Confirm new password"
                               autoComplete="true"
                               value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <FormButton type={"submit"}>RESET PASSWORD</FormButton>
                </InputWrapper>
            </Form>
        </PageWrapper>
    );
};
