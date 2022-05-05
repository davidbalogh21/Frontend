import { RouteInfo } from '../types/AssetTypes';

export function getMenuData(): RouteInfo[] {
	return ([
		{
			'id': 'menu-feed',
			'label': 'Feed',
			'route': '/feed/trending',
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