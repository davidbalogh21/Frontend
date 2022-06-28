import React from 'react';
import NotFoundGif from '../../../assets/images/notfound.gif';
import { Gif, Wrapper } from './PageNotFound.css';

function PageNotFound() {

	return (
		<div>
			<Wrapper>
				<Gif src={NotFoundGif} alt="error404"/>
				<h1>It looks like the page you were looking for could not be found!</h1>
				<h2>Meanwhile here are some popular movies!</h2>
			</Wrapper>
		</div>
	);
}

export default PageNotFound;