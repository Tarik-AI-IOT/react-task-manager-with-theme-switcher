import { createContext, useState } from "react";


export const ThemeContext = createContext();

export function ThemeProvider ({children}) {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}