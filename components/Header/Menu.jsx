import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/favicon.png';

import Link from 'next/link';
import { headerMenuData } from './data';

const Menu = () => {
	return (
		<div>
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-md-12 d-flex justify-content-between">
							<button data-trigger="#navbar_main" class="d-lg-none btn main_menu_toggle" type="button"><i class="fas fa-bars"></i></button>
							<div class="site-logo">
								<Link href="/"><a><Image width={180} height={80} src={logo} alt="The Themely Logo" /></a></Link>
							</div>
							<ul class="nav justify-content-end">
								<li class="nav-item d-none d-sm-block">
									<a class="nav-link" href="https://www.thethemely.com/blogs">Blog</a>
								</li>
								<li class="nav-item d-none d-sm-block">
									<a class="nav-link" href="https://www.thethemely.com/user/support-ticket">Support</a>
								</li>
								<li class="nav-item">
									<a class="nav-link btn-cart" id="cart_count_tooltip" data-toggle="tooltip" data-placement="bottom" title="" href="https://www.thethemely.com/cart" data-original-title="0 Items">
										<span class="badge" id="cart_count">0</span>
										<i class="ti ti-shopping-cart-full"></i>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link btn-sign-in" href="https://www.thethemely.com/signin">Sign In <i class="fas fa-sign-in-alt"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* {headerMenuData.map((item) => {
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
			})} */}
		</div>
	);
};

export default Menu;
