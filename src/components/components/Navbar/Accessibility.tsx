import React, {useContext, useEffect, useState} from 'react';
import { AccessibilityContainer, Button } from '../../styles/AccessibilityStyles.css';
import {useUser} from "../../../contexts/UserContext";
import {AuthContext} from "../../../contexts/AuthContext";
import { useHistory } from 'react-router-dom'

export function Accessibility() {
	const userData = useContext(AuthContext);
	const [isProfile, setIsProfile] = useState<boolean>(false);
	const url = window.location.pathname;
	const history = useHistory();

	useEffect(()=>{
		setIsProfile(!!userData?.username);
	}, [history]);

	return (
		<AccessibilityContainer>
			{isProfile ? <Button href="/profile">PROFILE</Button> : <Button href="/login">LOGIN</Button>}
		</AccessibilityContainer>
	);
}