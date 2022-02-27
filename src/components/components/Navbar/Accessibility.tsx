import React, {useEffect, useState} from 'react';
import { AccessibilityContainer, Button } from '../../styles/AccessibilityStyles.css';
import {useUser} from "../../../contexts/UserContext";

export function Accessibility() {
	const {userData} = useUser();
	console.log(userData);

	return (
		<AccessibilityContainer>
			{userData.current ? <Button href="/profile">PROFILE</Button> : <Button href="/login">LOGIN</Button>}
		</AccessibilityContainer>
	);
}