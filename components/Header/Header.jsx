import React from 'react';
import HeaderSubMenu from './HeaderSubMenu';
import Menu from './Menu';

const Header = () => {
    return (
        <header className=''>
            <Menu />
            <HeaderSubMenu />
        </header>
    );
};

export default Header;
