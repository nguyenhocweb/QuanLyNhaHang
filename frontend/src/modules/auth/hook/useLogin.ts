
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {  LoginSchemaType} from "@/src/modules/auth/validation/LoginSchemaType"
import useAuth_State from "@/src/components/providers/auth_state";

import { login } from "@/src/modules/auth/services/authServices";
export const useLogin = () => {
    const route = useRouter();

    const setLogin = useAuth_State((state) => state.setLogin)
    const mutation = useMutation({
        mutationFn: (data: LoginSchemaType) => login(data),
        onSuccess: (data) => {
            // lưu dữ liệu sau khi đăng nhập
            setLogin(data);
            route.push("/");
            route.refresh();
        },
        onError:(error:any)=>{
            const mes=error.response?.data?.message||"có lỗi đã xảy ra";
            console.log(mes);
            /// tạo thông báo lỗi
        }
    });
    return {
        login:mutation.mutate,
        loginAsync:mutation.mutateAsync,
        isLoading:mutation.isPending,
    }
}