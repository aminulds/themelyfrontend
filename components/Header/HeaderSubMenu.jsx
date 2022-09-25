import Link from 'next/link';
import React from 'react';

import {headerSubMenuData} from './data';

const HeaderSubMenu = () => {
	return (
		<ul>
			{headerSubMenuData.map((item) => {
				if (item.title === 'HTML Templates') {
					return (
						<li key={item.title}>
							<Link href={item.url}>
								<a>{item.title}</a>
							</Link>
							<ul>
								{item.subItems.map((item) => {
									console.log(item)
								})}
							</ul>
						</li>
					);
				} else {
					return (
						<li key={item.title}>
							<Link href={item.url}>
								<a>{item.title}</a>
							</Link>
						</li>
					);
				}
			})}
		</ul>
	);
};

export default HeaderSubMenu;
