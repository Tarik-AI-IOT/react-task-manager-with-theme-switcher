import React, { useState } from "react";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";

const headerStyle = {
    fontWeight: "bold",
    textAlign: "center",
    margin: "70px 0",
    minHeight: "25vh",
    fontSize: "3em",
}

export default function Header() {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <div className={theme === "light" ? "light" : "darker"}>
            <HeaderThemeSwitcher onChangeTheme={handleChangeTheme} />
            <h1 style={headerStyle}>Just do it.</h1>
        </div>
    );
}