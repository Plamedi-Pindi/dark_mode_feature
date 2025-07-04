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
        <div className={` ${theme === 'dark' && 'dark:bg-gray-900'} bg-[url('./bg.png')] min-h-screen w-full   flex flex-col items-center justify-center relative pt-10 pb-20 overflow-hidden`}>
            <NavigationBar />

            <main className="p-4 max-w-[1020px] m-auto">
                <h1 className="text-blue-500 text-3xl font-bold mb-8 mt-10 text-center ">Hi, there 🖐! I created this page to test Dark Mode Feature</h1>

                <div className={`lg:h-[30rem lg:w-[60rem] xl:w-full xl:pr-4 xl:pl-4 lg:border-[0.5px] border-gray-300 rounded-md flex sm:flex-row flex-wrap flex-col gap-6 items-center justify-around bg-white/50 backdrop-sm pt-6 pb-6 ${theme === 'dark' && 'lg:dark:bg-gray-800/2 backdrop-blur-sm dark:bg-gray-900   dark:border-gray-600'}`}>

                    <Card
                        icon={<SquarePen className="block w-8 h-8 " />}
                    />

                    <Card
                        icon={<UserRoundCog className="block w-8 h-8 " />}
                    />

                    <Card
                        icon={<WifiPen className="block w-8 h-8 " />}
                    />

                    <Card
                        icon={<UserRoundCog className="block w-8 h-8 " />}
                    />

                </div>
            </main>
        </div>
    );
}

export default Mainpage