import React, { useState } from "react";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {themes} from "../../themes/themes";
import styles from "./Header.module.css";
import GitHubCorner from "./GitHubCorner";


export default function Header() {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <GitHubCorner styles={styles} />
            <HeaderThemeSwitcher />
            <div className={styles.titleWrapper}>
                <h1 className={styles.headerStyle} style={{color: themes[theme].color}}>Just do it.</h1>
            </div>
        </div>
    );
}