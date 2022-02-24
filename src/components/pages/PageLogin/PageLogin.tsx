import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {RegisterWrapper, RegisterSubtext, RegisterTitle, RegisterForm} from "../PageRegister/PageRegister.css";
import {
	Form, FormLinkText,
	FormButton,
	FormInput,
	FormPicture,
	FormPictureWrapper,
	FormTitle,
	InputWrapper,
	PageWrapper, FormLink, ErrorMessage
} from './PageLogin.css';
import {Button} from "@material-ui/core";
import axios from "axios";
import {History} from "history";
import MovieLogo from "../../../assets/images/logo.png";

type PageLoginPropsType = {
	history: History,
};

export const PageLogin: React.FC<PageLoginPropsType> = ({history}) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	/*useEffect(()=>{
		if (localStorage.getItem("authToken")) {
			history.push("/");
		}
	}, [history]);*/

	const onLogin = async (e: any) => {
		e.preventDefault();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}

		try {
			const {data} = await axios.post("http://localhost:5000/api/auth/login", { email, password}, config);
			localStorage.setItem("authToken", data.token);

			history.push("/profile");
		} catch (error: any) {
			setError(error.response.data.error);
			setTimeout(() => {
				setError('');
			}, 5000);
		}
	};

	return (
		<PageWrapper>
			<Form onSubmit={onLogin}>
				<FormPictureWrapper>
					<FormPicture src={MovieLogo} alt="Movie logo"/>
				</FormPictureWrapper>
				<FormTitle>
					Login
				</FormTitle>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<InputWrapper>
				<FormInput type={"email"} required id={"email"} placeholder={"Email"} value={email}
					   onChange={(e) => setEmail(e.target.value)}/>

				<FormInput type={"password"} required id={"password"} placeholder={"Password"} value={password}
					   onChange={(e) => setPassword(e.target.value)}/>

				<FormButton type={"submit"}>LOGIN</FormButton>
				</InputWrapper>
				<FormLinkText>Don't have an account? <FormLink to={"/register"}>Register</FormLink></FormLinkText>
				<FormLinkText><FormLink to={"/forgot"}>Forgot password? </FormLink></FormLinkText>
			</Form>
		</PageWrapper>
	)
};