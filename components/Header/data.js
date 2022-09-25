// Icon Import
import {FaSignInAlt} from 'react-icons/fa';
import {BiUserCircle, BiSupport} from 'react-icons/bi';
import {TbWallet} from 'react-icons/tb';
import {BsCloudDownload, BsPower} from 'react-icons/bs';

// Header Menu Data
export const headerMenuData = [
	{
		title: 'Sign In',
		icon: <FaSignInAlt />,
		url: 'signin',
	},
	{
		title: 'Create Account',
		icon: <BiUserCircle />,
		url: 'signup',
	},
	{
		title: 'User Profile',
		icon: <BiUserCircle />,
		url: 'dashboard',
	},
	{
		title: 'Billing Info',
		icon: <TbWallet />,
		url: 'billing_info',
	},
	{
		title: 'Downloads',
		icon: <BsCloudDownload />,
		url: 'downloads',
	},
	{
		title: 'Support Tickets',
		icon: <BiSupport />,
		url: 'support_ticket',
	},
	{
		title: 'Sign Out',
		icon: <BsPower />,
		url: '/',
	},
];

// Header Sub Menu Data
export const headerSubMenuData = [
	{
		title: 'All Item',
		url: 'all_items',
	},
	{
		title: 'HTML Templates',
		url: 'html_templates',
		subItems: [
			{
				subTitle: 'Landing Page Templates',
				subUrl: 'landing_page_templates',
			},
			{
				subTitle: 'Multi-Page Templates',
				subUrl: 'multi_page_templates',
			},
		],
	},
	{
		title: 'UX/UI Kits',
		url: 'uxui_kits',
	},
];
