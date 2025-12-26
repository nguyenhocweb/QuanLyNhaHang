import Icon_Star from "@/src/components/icon/star";
const IconFiveStars = (
    {
        NumberStar,
        gapx,
        fontsize
    }
        :
        {
            NumberStar: number,
            gapx?: number,
            fontsize?: number
        }

) => {
    const Songuyen = Math.floor(NumberStar);
    const Phandu = NumberStar - Songuyen;
    const PhanKhuat = Songuyen < 5 ? (Phandu === 0 ? 5 - Songuyen : 5 - 1 - Songuyen) : 0;
    return (
        <div className="flex " style={{ gap: gapx ? `${gapx}px 0px` : '2px 0px' }}>
            {Array.from({ length: Songuyen }, (_, index) => (
                <Icon_Star key={index} percent={100} px={fontsize?fontsize:20} />
            ))}
            {Phandu > 0 && Songuyen < 5 && (
                <Icon_Star percent={Phandu * 100} px={fontsize?fontsize:20} />
            )}
            {Array.from({ length: PhanKhuat }, (_, index) => (
                <Icon_Star key={index} percent={0} px={fontsize?fontsize:20} />
            ))}
        </div>
    )
}
export default IconFiveStars;