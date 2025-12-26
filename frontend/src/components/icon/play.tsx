const IconPlay = (
    { px = 16, className, font = 20 }:
        { px?: number, className?: string, font?: number }
) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={font}
            width={px}
            height={px}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
            </g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
                <path d="M10.2071 7.49995L6 3.29285V11.7071L10.2071 7.49995Z" >
                </path>
            </g>
        </svg>

    )
}
export default IconPlay;