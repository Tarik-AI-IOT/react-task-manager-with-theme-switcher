import styles from "./HeaderThemeSwitcher.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { themes } from "../../themes/themes";


export default function HeaderThemeSwitcher() {

    const { handleChangeTheme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <div className={styles.themeSwitcher} style={themes["standard"]} onClick={() => handleChangeTheme("standard")}></div>
            <div className={styles.themeSwitcher} style={themes["light"]} onClick={() => handleChangeTheme("light")}></div>
            <div className={styles.themeSwitcher} style={themes["darker"]} onClick={() => handleChangeTheme("darker")}></div>
        </div>
    );
};