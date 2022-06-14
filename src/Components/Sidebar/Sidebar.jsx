import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.list}>
                <ul>
                    <li><a href='#'>Гаджеты и аксессуары</a></li>
                    <hr />
                    <li><a href='#'>Бытовая техника</a></li>
                    <hr />
                    <li><a href='#'>Прочее</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;