import React from 'react';
import styles from './header.module.css';
import logo from '../../image/cart.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.text}>
                <h1>Intocode Coding Shopcamp</h1>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt='basket' />
            </div>
        </div>
    );
};

export default Header;