import React from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider (props) {
    const [theme, setTheme] = React.useState("dark");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}
