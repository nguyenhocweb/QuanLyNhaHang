import { 
    IconAbout, IconContact, IconHome,IconLogout,IconClose ,IconDish,
    IconRestaurant
     
} from "@/src/components/icon"
const HeaderMenu = ({onsend }:{onsend:()=>void}) => {
    const user = false;
    const navItems = [
        { id: 1, name: "Đăng nhập", link: "/login", icon: null, login: -1 },
        { id: 2, name: "Đăng ký", link: "/register", icon: null, login: -1 },
        { id: 3, name: "Trang chủ", link: "/", icon: <IconHome px={20} />, login: 0 },
        { id: 4, name: "Nhà hàng", link: "/restaurant",icon:<IconRestaurant size={20}/>, login: 0 },
        { id: 5, name: "Món ăn", link: "/dish", icon:<IconDish px={20} className="text-white"/>,login: 0 },
        { id: 6, name: "Về chúng tôi", link: "", icon: <IconAbout px={20} />, login: 0 },
        { id: 7, name: "Liên hệ", link: "", icon: <IconContact px={20} />, login: 0 },
        { id: 8, name: "Đănh xuất", link: "", icon: <IconLogout px={20} className="text-white" />, login: 1 },
    ]
    return (
        <nav className= "fixed min-h-[calc(100vh-60px)] bg-bg-header-public  w-50  right-0 z-50"

            >
                <div className="relative h-18 
                after:absolute after:content-[''] after:w-full after:h-0.5 after:bottom-0 after:rounded-[10px] after:bg-after-header2-public  "
                >
                    <h3
                    className="w-full h-full flex items-center justify-center text-text-header-public font-bold " 
                    >Chào bạn</h3>
                   <button className="absolute right-2 top-2"
                   onClick={onsend}
                   >
                    <IconClose font={1} className="text-white  " px={20}/>
                    </button>
                </div>
                {
                navItems
                .filter((item)=>(user ? (item.login !== -1||item.login!==-1):(item.login !== 1)))
                .map(
                    Items=>
                    <a
                    className="relative text-text-header1-public w-full h-10 pl-2 flex items-center gap-x-2 
                     after:absolute after:content-[''] after:w-full after:h-0.5 after:bottom-0 after:left-0 after:rounded-[10px] after:bg-after-header2-public  "
                    key={Items.id}
                     href={Items.link}>
                       <span >{Items.icon}</span> <p>{Items.name}</p>
                     </a>
                    )
            }
        </nav >
    )
}
export default  HeaderMenu;