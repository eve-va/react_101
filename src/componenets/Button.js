import {useContext} from "react"
import {ThemeContext} from "../themeContext"

function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <button 
            onClick={toggleTheme} 
            className={`${theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button