import React from 'react';
import { LinkItem, LinkStyle, LinksWrapper, NavLinksContainer } from '../../styles/LinkStyles.css';
import getMenuData from '../../../utils/fnMenuData';
import { RouteInfo } from '../../../types/AssetTypes';

export function NavLinks() {
	const routes: RouteInfo[] = getMenuData();

	return (
		<NavLinksContainer>
			<LinksWrapper>
				{routes.map((route) => (
					<LinkItem key={`id${route.route}`}>
						<LinkStyle to={route.route}>
							{route.label}
						</LinkStyle>
					</LinkItem>
				))}
			</LinksWrapper>
		</NavLinksContainer>
	);
}