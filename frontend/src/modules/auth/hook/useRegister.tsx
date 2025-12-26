import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { RegisterSchemType } from "../validation/RegisterSchemaType";
import { register } from "../services/authServices";
export const useRegister = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: (data: RegisterSchemType) => register(data),
        onSuccess: () => {
            router.push("/login");
        },
        onError: (error: any) => {
            const mes = error.response?.data?.message || "có lỗi đã xảy ra";
            console.log(mes);
        }
    })
    return {
        Register: mutation.mutate,
        registerAsync: mutation.mutateAsync,
        isLoading: mutation.isPending,
    };
}