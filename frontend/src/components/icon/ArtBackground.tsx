// 3. Component SVG: Nền nghệ thuật đường nét lớn (Big Art Background Lines)
const ArtBackground = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="art-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
                <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
            </linearGradient>
        </defs>
        {/* Các đường cong ngẫu hứng */}
        <path d="M0,300 Q200,100 400,300 T800,300" fill="none" stroke="url(#art-grad)" strokeWidth="1" className="animate-[pulse_8s_ease-in-out_infinite]" />
        <path d="M-100,500 Q300,200 600,500 T1000,400" fill="none" stroke="url(#art-grad)" strokeWidth="2" opacity="0.6" />
        <path d="M1200,100 Q900,400 600,200 T0,600" fill="none" stroke="url(#art-grad)" strokeWidth="1.5" opacity="0.8" />
        {/* Vài chấm tròn trang trí
        <circle cx="200" cy="200" r="4" fill="#22d3ee" className="animate-ping" />
        <circle cx="800" cy="400" r="6" fill="#a855f7" /> */}
    </svg>
);
export default ArtBackground;