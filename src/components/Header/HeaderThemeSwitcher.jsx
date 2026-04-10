import React from "react";
import styles from "./HeaderThemeSwitcher.module.css";



export default function HeaderThemeSwitcher({ onChangeTheme }) {

    return (
        <div className={styles.container}>
            <div className={styles.themeSwitcher} onClick={() => onChangeTheme("standard")}></div>
            <div className={styles.themeSwitcher} onClick={() => onChangeTheme("light")}></div>
            <div className={styles.themeSwitcher} onClick={() => onChangeTheme("darker")}></div>
        </div>
    );
};