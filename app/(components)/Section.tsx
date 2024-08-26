import { ReactNode } from "react"

interface paddingProps {
    children: ReactNode,
    className?:String
}

const Section: React.FC<paddingProps> = ({ children, className='' }) => {
    return (
        <main className={`px-3 md:px-10 ${className}`}>
            {children}
        </main>
    )
}

export default Section