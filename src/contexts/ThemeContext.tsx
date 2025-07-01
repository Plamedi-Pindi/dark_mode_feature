import {
    createContext,
    useContext,
    type ReactNode,
    useState,
    useEffect,
    type Dispatch,
    type SetStateAction
} from 'react';

// Types
type ThemeContextType = [theme: 'light' | 'dark', setTheme: Dispatch<SetStateAction<'light' | 'dark'>>]

// Creat Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Context provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );

    useEffect(() => {
        localStorage.setItem('theme', theme);
    
    }, [theme]);

    return (
        <ThemeContext value={[theme, setTheme]} >
            {children}
        </ThemeContext>
    )
}

//  Export useContex
export const useThemeContext = () => {
    const result = useContext(ThemeContext);

    if (!result) {
        throw new Error("Ouve um erro no Theme Context");
    }

    return result;
}