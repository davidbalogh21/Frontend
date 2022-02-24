import React, {useState} from "react";
import axios from "axios";
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

export const PageForgot = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const forgotPasswordHandler = async (e: any) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const {data} = await axios.post(
                "http://localhost:5000/api/auth/forgotPassword",
                {email},
                config
            );

            setSuccess(data.data);
        } catch (error: any) {
            setError(error.response.data.error);
            setEmail("");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <PageWrapper>
            <Form onSubmit={forgotPasswordHandler}>
                <FormPictureWrapper>
                    <FormPicture src={MovieLogo} alt="Movie logo"/>
                </FormPictureWrapper>
                <FormTitle>
                    Forgot Password
                </FormTitle>
                <DescriptionText>
                    Uh oh! Looks like you forgot your password. Input your email so we can send you a password reset confirmation.
                </DescriptionText>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <span className="success-message">{success}</span>}
                <InputWrapper>
                    <FormInput type="email"
                               required
                               id="email"
                               placeholder="Email address"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>

                    <FormButton type={"submit"}>SEND EMAIL</FormButton>
                </InputWrapper>
            </Form>
        </PageWrapper>
    );
};
