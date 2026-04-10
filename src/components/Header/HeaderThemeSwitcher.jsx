import React from "react";
import styles from "./HeaderThemeSwitcher.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { themes } from "../../themes/themes";


export default function HeaderThemeSwitcher() {

    const { handleChangeTheme, theme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <div className={styles.themeSwitcher} onClick={() => handleChangeTheme("standard")}></div>
            <div className={styles.themeSwitcher} onClick={() => handleChangeTheme("light")}></div>
            <div className={styles.themeSwitcher} onClick={() => handleChangeTheme("darker")}></div>
        </div>
    );
};