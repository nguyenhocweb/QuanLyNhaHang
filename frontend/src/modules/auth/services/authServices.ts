import apiClient from "@/src/lib/apiClient";

import { Login, User,Register } from "@/src/feartures/auth/types";

export const login = async (data: Login): Promise<User> => {
    return await apiClient.post("/auth/login", data);
}
export const register=async(data:Register):Promise<void>=>{
       return await apiClient.post("/auth/register",data);
}

