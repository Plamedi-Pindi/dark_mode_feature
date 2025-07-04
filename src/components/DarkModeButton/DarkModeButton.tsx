// Import Lucide icons
import { Sun, Moon, Check } from "lucide-react";

// Import Hooks
import { useEffect, useRef, type ReactNode } from "react";
import { forwardRef } from "react";

// Import Theme Context
import { useThemeContext } from "../../contexts/ThemeContext";

const DarkModeButton = () => {
    const dropRef = useRef<HTMLUListElement>(null);
    const SwitchRef = useRef<HTMLDivElement>(null);

    const [theme, setTheme] = useThemeContext();

    useEffect(() => {
        const button = SwitchRef.current;
        const drop = dropRef.current

        if (!button || !drop) return;

        let height = (drop.style.height = '0rem');
        drop.style.transition = '0.5s';
        drop.style.display = 'none'

        const listItem = drop.querySelectorAll("li");

        // 
        const HandleDrop = () => {
            if (height === '8rem') {
                height = drop.style.height = "0rem"

                setTimeout(() => {
                    drop.style.display = 'none'
                }, 300)

            } else {
                drop.style.display = 'inline-block'
                setTimeout(() => {
                    height = drop.style.height = "8rem"
                }, 100)
            }
        }

        // 
        button.addEventListener('click', HandleDrop);
        listItem?.forEach(item => {
            item.addEventListener('click', HandleDrop);
        });


        // 
        return () => {
            button.removeEventListener('click', HandleDrop);
            listItem?.forEach(item => {
                item.removeEventListener('click', HandleDrop)
            });
        }
    }, []);

    return (
        <div>
            <SwitchButton ref={SwitchRef} theme={theme} />

            <List ref={dropRef}>
                <Item onClick={() => setTheme("dark")}>
                    Dark

                    {theme === "dark" && (
                        <Check className="text-blue-500" />
                    )}
                </Item>

                <Item onClick={() => setTheme("light")}>
                    Light

                    {theme === "light" && (
                        <Check className="text-blue-500" />
                    )}
                </Item>
            </List>
        </div>
    );
}

// #################################################################3333
interface SwitchButtonProps {
    theme?: string
}

const SwitchButton = forwardRef<HTMLDivElement, SwitchButtonProps>(({ theme }, ref?) => {
    return (
        <div ref={ref} className={`w-10 h-10 rounded-xl border-[0.5px] border-gray-300 bg-white flex items-center justify-center relative ${theme === 'dark' && 'dark:bg-gray-800 dark:border-gray-600'}`}>
            <button>
                {theme === 'light'
                    ? (<Sun className="text-blue-500" />)
                    : (<Moon className={`text-blue-500 `} />)
                }
            </button>
        </div>
    )
})


//  ########################################################################
interface ListProps {
    children: ReactNode;
}

const List = forwardRef<HTMLUListElement, ListProps>(({ children }, ref) => {
    const [theme] = useThemeContext()

    return (
        <ul ref={ref} className={`absolute bg-white w-34 h-auto right-6 top-14 rounded-xl border-2 border-gray-300 overflow-hidden hidden ${theme === 'dark' && 'dark:bg-gray-800/80 dark:backdrop-blur-xl ] dark:border-gray-600 dark:text-gray-50'}`}>
            {children}
        </ul>
    )
})

// ############################################################################
const Item = ({ children, onClick }: { children: ReactNode, onClick?: () => void }) => {
    const [theme] = useThemeContext()

    return (
        <li onClick={onClick} className={`text-base p-4 hover:bg-blue-200 rounded-xl mb-1 mt-1 flex items-center justify-between ${theme === 'dark' && 'dark:hover:bg-gray-700'}`}>
            {children}
        </li>
    )
}

export default DarkModeButton