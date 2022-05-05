import React, {useState, useEffect} from 'react';
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
import axios from "axios";
import {History} from "history";
import MovieLogo from "../../../assets/images/logo.png";
import {useUser} from "../../../contexts/UserContext";

type PageLoginPropsType = {
	history: History,
};

export const PageLogin: React.FC<PageLoginPropsType> = ({history}) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const {userData} = useUser();

	useEffect(()=>{
		if (localStorage.getItem("authToken")) {
			history.push("/profile");
		}
	}, [history]);

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
			fetchPrivateData();
			window.open("/profile", "_self");
		} catch (error: any) {
			setError(error.response.data.error);
			setTimeout(() => {
				setError('');
			}, 5000);
		}
	};

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