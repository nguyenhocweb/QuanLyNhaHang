import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL ,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});
// can thiệp vào trước khi gửi yêu cầu (request)
axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Lấy token từ LocalStorage (hoặc Cookie/Session)
        // Lưu ý: Nếu dùng Next.js SSR, đoạn này cần xử lý khác một chút (dùng cookies-next)
        const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
        if (token) config.headers.Authorization = `Bearer ${token}`
        // tự động kiểm tra dạng obj / file
        config.data instanceof FormData ?
            delete config.headers["Content-Type"] : config.headers["Content-Type"] = "application/json"
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// can thiệt khi phản hồi từ server 
axiosClient.interceptors.response.use(
    (response:AxiosResponse)=>{

        // kiểm tra server có gửi token mới không
        const  newToken=response.headers['x-access-token'];
       
        newToken && typeof window!=="undefined" && 
        (
            // Lưu token mới vào Storage
            localStorage.setItem("accessToken",newToken),
             // Cập nhật ngay lập tức cho các request tiếp theo của instance này
         axiosClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
        )

         return response
    },
    (error)=> Promise.reject(error),
)
export default axiosClient;