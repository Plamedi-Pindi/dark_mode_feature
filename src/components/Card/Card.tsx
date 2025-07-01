
// Import components
import type { ReactNode } from "react";
import Button from "../Button/Button";

// Import Theme context
import { useThemeContext } from "../../contexts/ThemeContext";

const Card = ({ icon }: { icon: ReactNode }) => {
    const [theme] = useThemeContext();

    return (
        <div className={`w-60 h-86 p-6 border-2 border-gray-300 rounded-xl bg-white shadow hover:scale-102 duration-300 hover:border-blue-400 ${theme === "dark" && 'dark:bg-gray-50/8 dark:border-gray-600 dark:backdrop-blur-3xl'} `}>
            <div className={`w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center mb-8`}  >
                {icon}
            </div>
            <h2 className="text-xl font-bold text-blue-500 ">Card Sabject goes here</h2>
            <p className={`text-sm text-gray-500 mt-2 ${theme === 'dark' && 'dark:text-gray-300'}`}>Here come a simple description about the card.</p>

            <Button margins="mt-8">Click on me</Button>
        </div>
    )
}

export default Card