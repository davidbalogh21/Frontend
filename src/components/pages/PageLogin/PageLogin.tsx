import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {RegisterWrapper, RegisterSubtext, RegisterTitle, RegisterForm} from "../PageRegister/PageRegister.css";
import {PageWrapper} from './PageLogin.css';
import {Button} from "@material-ui/core";
import axios from "axios";
import {History} from "history";

type PageLoginPropsType = {
	history: History,
};

export const PageLogin: React.FC<PageLoginPropsType> = ({history}) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	useEffect(()=>{
		if (localStorage.getItem("authToken")) {
			history.push("/");
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
			<RegisterForm onSubmit={onLogin}>
				<RegisterTitle>
					Login
				</RegisterTitle>
				{error && <span>{error}</span>}
				<label htmlFor={"email"}>Email: </label>
				<input type={"email"} required id={"email"} placeholder={"Enter email"} value={email}
					   onChange={(e) => setEmail(e.target.value)}/>

				<label htmlFor={"password"}>Password: </label>
				<input type={"password"} required id={"password"} placeholder={"Enter password"} value={password}
					   onChange={(e) => setPassword(e.target.value)}/>

				<Button type={"submit"}>Register</Button>

				<RegisterSubtext>Don't have an account? <Link to={"/register"}>Register</Link></RegisterSubtext>
				<RegisterSubtext>Forgot password? <Link to={"/forgot"}>Reset password</Link></RegisterSubtext>
			</RegisterForm>
		</PageWrapper>
	)
};