import React from 'react';
import {
    NavLinksContainer,
    LinksWrapper,
    LinkItem,
    LinkStyle,
} from '../styles/LinkStyles';
import getMenuData from '../../utils/fnMenuData';
import {RouteInfo} from '../../types/AssetTypes';

export function NavLinks() {
    const routes: RouteInfo[] = getMenuData();

    return (
        <NavLinksContainer>
            <LinksWrapper>
                {routes.map((route) => (
                    <LinkItem key={`id${route.route}`}>
                        <LinkStyle exact to={route.route}>
                            {route.label}
                        </LinkStyle>
                    </LinkItem>
                ))}
            </LinksWrapper>
        </NavLinksContainer>
    );
}