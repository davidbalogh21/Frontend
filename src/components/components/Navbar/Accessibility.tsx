import React, {useContext} from 'react';
import {AccessibilityContainer, Button} from '../../styles/AccessibilityStyles.css';
import {AuthContext} from "../../../contexts/AuthContext";

export function Accessibility() {
	const userData = useContext(AuthContext);

	return (
		<>
		<AccessibilityContainer>
			{userData?.username ? <Button href="/profile">PROFILE</Button> : <Button href="/login">LOGIN</Button>}
		</AccessibilityContainer>
		</>
	);
}