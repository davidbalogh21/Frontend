import { RouteInfo } from '../types/AssetTypes';

export default function getMenuData(): RouteInfo[] {
	return ([
		{
			'id': 'menu-home',
			'label': 'Home',
			'route': '/',
		},
		{
			'id': 'menu-categories',
			'label': 'Categories',
			'route': '/categories',
		},
		{
			'id': 'menu-popular',
			'label': 'Popular',
			'route': '/popular',
		},
	]);
};