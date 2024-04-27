import { createContext } from "react"
import useTheme from "../hooks/useTheme"

export const themes = {
    light: {
        title: "light",
        color: "#000000",
        background: "#ffffff",
        backgroundCard: "#382f32"

    },
    dark: {
        title: "dark",
        color: "#eeeeee",
        background: " #000000",
        backgroundCard: "#382f32"
    }

}

export const ThemeContext = createContext({})

export const Themeprovider = (props) =>{

    const [theme, setTheme] = useTheme("theme", themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>  
            {props.children}
        </ThemeContext.Provider>
    )
}