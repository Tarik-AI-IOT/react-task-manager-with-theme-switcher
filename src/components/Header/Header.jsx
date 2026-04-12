import React, { useState } from "react";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {themes} from "../../themes/themes";
import styles from "./Header.module.css";



export default function Header() {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <HeaderThemeSwitcher />
            <h1 className={styles.headerStyle} style={{color: themes[theme].color}}>Just do it.</h1>
        </div>
    );
}