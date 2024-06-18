import React from "react";
import styles from "./Navigation.module.css";

const Navigation = ({onLogout}) => {
    return <nav
    className={styles.nav}>
        <ul>
            <li>
                <button href="/">MyPage</button>
            </li>

            <li>
                <button href="/">Admin</button>
            </li>

            <li>
                <button href="/" onClick={onLogout} >Logout</button>
            </li>
        </ul>
    </nav>;
};

export default Navigation;
