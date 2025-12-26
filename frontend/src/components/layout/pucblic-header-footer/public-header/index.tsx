"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/img/logo.jpg";
import { IconAbout, IconContact, IconHome, IconSearch, IconMenu,
    IconRestaurant,IconDish
 } from "@/src/components/icon"
 import { A} from "@/src/components/ui";

import HeaderMenu from "./menu";

const PublicHeader = () => {
    const [scrolelY, setScrollY] = useState(0);
 
    // Lắng nghe sự kiện cuộn trang để cập nhật giá trị scrollY
    useEffect(() => {
        const handleScroll = () => {
            // Kiểm tra vị trí cuộn dọc
            setScrollY(window.scrollY);
            console.log("scrollY:", window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    // danh sách nav
    const navItems = [
        { name: "Trang chủ", link: "/", icon: <IconHome px={20} /> },
        { name: "Báo cáo", link: "",icon:null },
        { name: "Về chúng tôi", link: "", icon: <IconAbout px={20} /> },
        { name: "Liên hệ", link: "", icon: <IconContact px={20} /> },
    ];
    const btn = [
        { id: 1, name: "Đăng nhập", link: "/login", icon: null, hidden: false, },
        { id: 2, name: "Đăng ký", link: "/register", icon: null, hidden: false, },
    ]
    
    
 const [isShowMenu,setIsShowMenu]=useState(false)
    return (
        <>
        <header className={[
            // dùng chung cho các kích
            "w-full sticky top-0 left-0  z-1001   flex items-center justify-center transition-all duration-800",
            scrolelY > 15 ? "bg-bg-header-public" : "bg-transparent",
            // máy tinh
            "lg:h-25",
            // máy bảng
            "md:h-20",
            // điện thoại
            "h-15",

        ].join(' ')}>
            <div className={[
                // dùng chung cho các kích
                "flex items-center justify-between px-4 ",
                // máy tính
                "lg:h-20 lg:w-[80%]",
                // máy bảng
                "md:h-16 md:w-[95%]",
                // điện thoại
                "h-12 w-[98%]",
            ].join(" ")}>
                <a href=""
                >
                    <div className={[
                        // dùng chung cho các kích
                        "block bg-cover bg-center bg-no-repeat",
                        // máy tính
                        "lg:w-16 lg:h-16",
                        // máy bảng
                        "md:w-12 md:h-12",
                        // điện thoại
                        "w-8 h-8",
                    ].join(" ")}
                        style={{ backgroundImage: `url(${logo.src})` }}>

                    </div>
                </a>

                <nav className={[
                    // dùng chung cho các kích

                    // máy tính
                    "lg:flex lg:items-center lg:justify-center lg:gap-8 lg:text-lg lg:block ",
                    // máy bảng
                    "md:gap-3 md:flex md:items-center md:justify-center md:text-md md:block",
                    // điện thoại
                    "hidden",
                ].join(" ")}>
                    {navItems.map((item, index) => (
                        <A key={index} href={item.link} variant="mau1"
                        
                            className= "  text-text-header-public flex-col lg:flex-row lg:gap-x-3"
                            
                        >
                            <span 
                            className={[
                                "w-[100%]  flex justify-center",
                                "lg:w-auto"
                            ].join(" ")}
                            >{item.icon}</span>
                            <p>{item.name}</p>
                        </A>
                    ))}
                </nav>
                <div className={[
                    // dành chung cho các kích thước
                    "flex item-center justify-center gap-x-3 transition-all duration-300",
                ].join(" ")}>

                    <button><IconSearch px={25} className="text-text-header-public cu " /></button>
                    <div className={[
                        // dành chung cho các kích thước
                        "flex items-center justify-center gap-x-3 ",
                        //dành cho máy tính
                        "",
                        // dành cho máy tính bảng
                        "",
                        //dành cho điện thoại
                        ""
                    ].join(" ")}>
                        {
                            btn.map(item => (
                                <a
                                href={item.link}
                                key={item.id}
                                
                                    className={[
                                        // dành chung cho các kích thước
                                        "",
                                        //dành cho máy tính
                                        "lg:block lg:px-2 lg:py-1 lg:border lg:border-border-header-public lg:rounded-md lg:text-text-header1-public lg:shadow-md lg:shadow-shadow-header-public ",
                                        "lg:bg-bg-btn-header-public lg:hover:bg-bg-hover-btn-header-public",
                                        // dành cho máy tính bảng
                                        "md:block md:px-2 md:py-1 md:border md:border-border-header-public md:rounded-md md:text-text-header1-public md:shadow-md md:shadow-shadow-header-public ",
                                        "md:bg-bg-btn-header-public md:hover:bg-bg-hover-btn-header-public",
                                       
                                        //dành cho điện thoại
                                        "hidden",
                                    ].join(" ")}
                                >
                                    {item.name}
                                    
                                </a>
                            ))
                        }
                        <button
                          className={[
                            "lg:hidden md:hidden"
                          ].join(" ")}
                          onClick={()=>{setIsShowMenu(prev=>!prev)}}
                        >
                            <IconMenu className="w-6 h-6 text-[var(--text-header-public)]" />
                        </button>
                    </div>
                </div>

            </div>

        </header>
        {
            isShowMenu&&<HeaderMenu onsend={()=>{setIsShowMenu(prev=>!prev)}}/>
        }
        </>

    );
}
export default PublicHeader;