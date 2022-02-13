import React from 'react';
import { AccessibilityContainer, Button } from '../../styles/AccessibilityStyles.css';

export function Accessibility() {
	return (
		<AccessibilityContainer>
			{localStorage.getItem("authToken") ? <Button href="/profile">PROFILE</Button> : <Button href="/login">LOGIN</Button>}
		</AccessibilityContainer>
	);
}