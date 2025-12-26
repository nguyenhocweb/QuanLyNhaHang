import type {Config} from "tailwindcss";
const config:Config={
    content:["./src/**/*.{ts,tsx}",],
    theme:{
        extend:{
            colors:{
                //màu dành cho đăng ký đăng nhập
                "text-lr":"rgb(166, 166, 166)",
                "text1-lr":"#FFB300",
                "text2-lr":"#05c1c",
                "hover-text2-lr":"#73ffff70",
                "text3-lr":"#FFB300",
                "hover-text3-lr":"#73ffff70",
            },
            backgroundImage:{
                  //màu dành cho đăng ký đăng nhập
               "bg-lr":"linear-gradient(45deg, #00f59f37, #00d0ff62)",
               "hover-bg-lr":"linear-gradient(45deg, #00384d 0%, #00658a 100%)",
            }
        }
    },
    plugins:[],

}