// import components
import Card from "../components/Card/Card";
import NavigationBar from "../components/NavBar/NavtigatioBar";

// Imprt Lucide Icons
import { SquarePen, UserRoundCog, WifiPen } from "lucide-react";

// import Theme context
import { useThemeContext } from "../contexts/ThemeContext";


const Mainpage = () => {
    const [theme] = useThemeContext()
    return (
        <div className={` ${theme === 'dark' && 'dark:bg-gray-900'} h-scree w-full bg-gray-50  flex flex-col items-center justify-center relative pt-10 pb-20`}>
            <NavigationBar />

            <h1 className="text-blue-500 text-3xl font-bold mb-8 mt-10">Hi, there 🖐! I created this page to test Dark Mode Feature</h1>

            <div className={`h-[30rem] w-[60rem] border-[0.5px] border-gray-300 rounded-md flex items-center justify-around bg-white ${theme === 'dark' && 'dark:bg-gray-800 dark:border-gray-600'}`}>

                <Card
                    icon={<SquarePen className="block w-8 h-8 dark:text-gray-50" />}
                />

                <Card
                    icon={<UserRoundCog className="block w-8 h-8 dark:text-gray-50" />}
                />

                <Card
                    icon={<WifiPen className="block w-8 h-8 dark:text-gray-50" />}
                />

            </div>
        </div>
    );
}

export default Mainpage