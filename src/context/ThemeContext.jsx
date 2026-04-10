import { createContext, useState } from "react";


export const ThemeContext = createContext();

export function ThemeProvider ({Children}) {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            {Children}
        </ThemeContext.Provider>
    );

}