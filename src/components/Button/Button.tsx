import type { ReactNode } from "react"


const Button = ({ children, margins }: { children: ReactNode, margins?: string }) => {

    return (
        <button className={`bg-blue-500 text-white w-46 p-2 rounded-xl font-medium hover:bg-blue-700 hover:scale-102 duration-300 focus:border-2 focus:border-blue-500 ${margins}`} >{children}</button>
    )
}

export default Button