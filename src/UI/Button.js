import cls from "classnames"
import { useMemo } from "react";


export default function Button({ color, size, disabled, onclick, children }) {

    // "classnames" will take the key which returned 'true'
    const buttonSizes = useMemo(() => {
        return {
            "py-2 px-3.5 gap-x-2 text-sm": size === "sm",
            "p-2.5 gap-x-1 text-sm": size === "md",
            "py-2.5 px-8 gap-x-2 text-base": size === "lg"
        };
    });

    const buttonClasses = useMemo(() => {
        return {
            "bg-pink-500 hover:bg-pink-900 text-white":
                color === "pink" && !disabled,
            "bg-pink-900 text-white cursor-not-allowed":
                disabled,
        };
    });

    return (
        <button className={cls("flex items-center transition rounded", buttonClasses, buttonSizes)} onClick={onclick}>
            {children}
        </button>
    )
}