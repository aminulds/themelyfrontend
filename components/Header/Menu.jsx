import React from 'react';

import Link from 'next/link';
import {headerMenuData} from './data';

const Menu = () => {
	return (
		<div>
			{headerMenuData.map((item) => {
				if (item.title === 'Sign In' || item.title === 'Create Account') {
					return (
						<Link href={item.url} key={item.title}>
							<a>
								<span>{item.title}</span>
								{item.icon}
							</a>
						</Link>
					);
				} else {
					return (
						<Link href={item.url} key={item.title}>
							<a>
								<span>{item.icon}</span>
								{item.title}
							</a>
						</Link>
					);
				}
			})}
		</div>
	);
};

export default Menu;
