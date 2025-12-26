import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "@/src/feartures/auth/types";
interface Auth_state {
    user: User | null,
    isLogin: boolean,

    // các chức năng
    setLogin: (user: User) => void,
    logout: () => void,
    updateUser: (user: Partial<Auth_state>) => void,// Dùng khi user đổi avatar/tên
}
const useAuth_State = create<Auth_state>()(
    persist(
        (set) => ({
            user: null,
            isLogin: false,

            // viết hàm chạy khi login
            setLogin: (user) => {
                set({
                    user: user,
                    isLogin: true,
                })
            },
            // hàm chạy khi đăng xuất
            logout: () => {
                set({
                    user: null,
                    isLogin: false
                });
                // Clear luôn localStorage của key này nếu muốn chắc chắn
                localStorage.removeItem('auth-storage');
            },
            // Hàm cập nhật thông tin user (ví dụ sau khi đổi profile)
            updateUser: (updatedData) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updatedData } : null,
                }));
            },
        }),
        {
            // tên để lấy
            name:"auth-storage",

            // nơi lưu trữ
            storage:createJSONStorage(()=>localStorage),
        }
    )
);
export default useAuth_State;