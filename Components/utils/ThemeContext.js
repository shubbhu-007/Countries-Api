import { createContext , useState } from "react";
export const ThemeContext = createContext();

export function ThemeSwitch({children}){
    const [isDark, setisDark] = useState(
        JSON.parse(localStorage.getItem("isDarkMode"))
    );

    return (
    <ThemeContext.Provider value={[isDark,setisDark]}>
        {children}

    </ThemeContext.Provider>
    )
}













































