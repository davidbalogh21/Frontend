import React, {useContext, useEffect, useState} from 'react';
import {AccessibilityContainer, Button, SearchInput} from '../../styles/AccessibilityStyles.css';
import {useUser} from "../../../contexts/UserContext";
import {AuthContext} from "../../../contexts/AuthContext";
import { useHistory } from 'react-router-dom'
import SearchBar from "material-ui-search-bar";

export function Accessibility() {
	const userData = useContext(AuthContext);
	const [isProfile, setIsProfile] = useState<boolean>(false);
	const url = window.location.pathname;
	const history = useHistory();

	useEffect(()=>{
		setIsProfile(!!userData?.username);
	}, [history]);



	return (
		<>
		<AccessibilityContainer>
			{isProfile ? <Button href="/profile">PROFILE</Button> : <Button href="/login">LOGIN</Button>}
		</AccessibilityContainer>
		</>
	);
}