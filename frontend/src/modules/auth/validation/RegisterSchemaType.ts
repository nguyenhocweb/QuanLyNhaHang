import validators from "@/src/lib/validators";
import { z} from "zod";
 export const RegisterSchema=z.object({
    user_name:validators.string("Tên đăng nhập"),
    email:validators.email(),
    password:validators.password("Mật khẩu"),
    confirmPassword:validators.string("Xác nhận mật khẩu"),
    date_of_birth:validators.dateTuoi(18,100),
    gender:validators.enum_string("Giới tính",["Nam","Nữ","Khác"]),
}).refine((data)=>data.password===data.confirmPassword,{
    message:"Mật khẩu xác nhận không khớp",
    path:["confirmPassword"] // gán lỗi vào confirmPassword
});

export type RegisterSchemType=z.infer<typeof RegisterSchema>;