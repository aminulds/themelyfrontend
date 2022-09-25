import React from 'react';
import HeaderSubMenu from './HeaderSubMenu';
import Menu from './Menu';

const Header = () => {
    return (
        <header className='container'>
            <Menu />
            <HeaderSubMenu />
        </header>
    );
};

export default Header;
