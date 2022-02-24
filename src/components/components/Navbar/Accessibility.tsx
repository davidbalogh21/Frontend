import React, {useEffect, useState} from 'react';
import { AccessibilityContainer, Button } from '../../styles/AccessibilityStyles.css';

export function Accessibility() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		function checkUserData() {
			const token = localStorage.getItem('authToken')

			if (token) {
				setIsLoggedIn(!!token);
			}
		}

		window.addEventListener('storage', checkUserData)

		return () => {
			window.removeEventListener('storage', checkUserData)
		}
	}, [])

	return (
		<AccessibilityContainer>
			{isLoggedIn ? <Button href="/profile">PROFILE</Button> : <Button href="/login">LOGIN</Button>}
		</AccessibilityContainer>
	);
}