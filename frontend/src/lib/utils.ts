
import { type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
export const cn=(...inputs:ClassValue[])=>{
    return twMerge(clsx(inputs));
}


// ✔ Bước 1: clsx(inputs)

// Chuyển tất cả input thành chuỗi className bình thường.

// ✔ Bước 2: twMerge()

// Tối ưu chuỗi bằng cách loại class trùng/xung đột theo Tailwind.