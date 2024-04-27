import { HiOutlineLightBulb } from "react-icons/hi";
import { Icon } from "./styles";
import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-contexts";

export const TogglerButton = () => {

  const { theme, setTheme } = useContext(ThemeContext)
 
  return (
    <Icon theme={theme}  onClick={() =>{
      setTheme(theme.title === "light" ? themes.dark : themes.light)
    }}>
        <HiOutlineLightBulb />
    </Icon>
  );
};
