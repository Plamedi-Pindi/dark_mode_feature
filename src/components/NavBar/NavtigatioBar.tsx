// Import Dark Mode Button
import DarkModeButton from "../DarkModeButton/DarkModeButton";

// Import Theme Context
import {useThemeContext} from "../../contexts/ThemeContext";

const NavigationBar = ()=> {
    const [theme] = useThemeContext();
    return(
        <div className={`w-[80%] h-14 bg-white drop-shadow-lg rounded-full  top-7  flex items-center p-6 justify-end ${theme === 'dark' && 'dark:bg-gray-900/10 dark:backdrop-blur-sm dark:border-[0.5px] dark:border-gray-600'}`} >
            <DarkModeButton />
        </div>
    );
}

export default NavigationBar