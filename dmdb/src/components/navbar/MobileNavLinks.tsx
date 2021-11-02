import React, {useState, useContext} from 'react';
import {Accessibility} from './Accessibility';
import MenuToggle from './MenuToggle';
import {NavLinksContainer, LinksWrapper, Marginer, LinkItem, StyledLink} from '../styles/MobileStyles';
import getMenuData from '../../utils/fnMenuData';
import {RouteInfo} from '../../types/AssetTypes';

export function MobileNavLinks() {
    const routes: RouteInfo[] = getMenuData();
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>
            {isOpen && (
                <LinksWrapper>
                    <Marginer/>
                    {routes.map((route) => (
                        <LinkItem key={`id_${route.route}`}>
                            <StyledLink exact to={route.route} key={`id_${route.route}`}>{route.label}</StyledLink>
                        </LinkItem>
                    ))}
                    <Marginer/>
                    <Accessibility/>
                </LinksWrapper>
            )}
        </NavLinksContainer>
    );
}