import validators from "@/src/lib/validators";

import { z} from "zod";
 export const LoginSchema=z.object({
    user_name:validators.string("Tên đăng nhập"),
    password:validators.password("Mật khẩu"),
});
export  type  LoginSchemaType=z.infer<typeof LoginSchema>;