// 2. Component SVG: Họa tiết ngôi sao vẽ tay (Doodle Star)
const DoodleStar = ({ className }:{className ?: string}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
);
export default DoodleStar;