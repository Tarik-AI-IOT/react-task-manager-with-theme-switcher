import React, { useState } from "react";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {themes} from "../../themes/themes";


const headerStyle = {
    textAlign: "center",
    margin: "70px 0",
    minHeight: "25vh",
    fontSize: "4rem",
}

export default function Header() {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <HeaderThemeSwitcher />
            <h1 style={{...headerStyle, color: themes[theme].color}}>Just do it.</h1>
        </div>
    );
}