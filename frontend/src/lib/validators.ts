import { z, ZodTypeAny } from "zod";

// Định nghĩa các định dạng dùng lại cho các trường dữ liệu
//required_error: thông báo lỗi khi trường bị bỏ trống chỉ dùng trong trường hợp undefined
//invalid_type_error: thông báo lỗi khi kiểu dữ liệu không đúng
//.trim(): loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
//.min(): độ dài tối thiểu của chuỗi hoặc giá trị số tối thiểu
//.max(): độ dài tối đa của chuỗi hoặc giá trị số tối đa
//.regex(): kiểm tra chuỗi có khớp với biểu thức chính quy hay không
//.nonnullable(): không cho phép giá trị null
//.finite(): chỉ nhận giá trị số hữu hạn, không phải NaN, Infinity // dùng cho số 
// coerce dùng để ép kiểu dữ liệu đầu vào về kiểu mong muốn trước khi xác thực vd ép kiểu sang string, date, number
// --- Preprocess chung: normalize null/undefined ---
const preprocessValue = <T extends ZodTypeAny>(schema: T, trimString = true) =>
    z.preprocess(val => {
        if (val === null || val === undefined) return undefined;
        if (trimString && typeof val === "string") return val.trim();
        return val;
    }, schema);

// --- Validators chuẩn senior ---
const validators = {
    // --- BASIC TYPES ---
    // dạng string/text vd "abc"
    string: (name: string) => preprocessValue(z.string().min(1, `${name} không được để trống`)),
    // dạng mật khẩu vd "Abc123!"
    password: (name: string) => preprocessValue(
        z.string()
            .min(6, `${name} phải có ít nhất 6 ký tự`)
            .max(20, `${name} không được vượt quá 20 ký tự`)
            .regex(/[A-Z]/, `${name} phải có ít nhất một chữ cái viết hoa`)
            .regex(/[a-z]/, `${name} phải có ít nhất một chữ cái viết thường`)
            .regex(/\d/, `${name} phải có ít nhất một chữ số`)
            .regex(/[!@$%.]/, `${name} phải có ít nhất một ký tự đặc biệt !@$%.`)
    ),
    // dạng email vd "yourname@gmail.com"
    email: () => preprocessValue(z.string().email("Email không hợp lệ")),
    // dạng ngày tháng vd "2023-10-15"
    dateTuoi: (minAge?: number, maxAge?: number) => {
        let schema = z.coerce.date().refine(
            (date) => date instanceof Date && !isNaN(date.getTime()),
            { message: "Ngày tháng không hợp lệ" }
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (minAge !== undefined) {
            const maxDate = new Date(
                today.getFullYear() - minAge,
                today.getMonth(),
                today.getDate()
            );

            schema = schema.max(maxDate, {
                message: `Bạn phải ít nhất ${minAge} tuổi`,
            });
        }

        if (maxAge !== undefined) {
            const minDate = new Date(
                today.getFullYear() - maxAge,
                today.getMonth(),
                today.getDate()
            );

            schema = schema.min(minDate, {
                message: `Tuổi không được quá ${maxAge}`,
            });
        }

        return schema;
    },

    // dạng ["Giá trị1", "Giá trị2", ...]
    enum_string: <T extends string>(name: string, values: readonly T[]) =>
        preprocessValue(z.enum(values).refine(val => val !== undefined, { message: `${name} không được để trống` }), true),
    // dạng [1, 2, 3, ...]
    enum_number: (name: string, values: number[]) =>
        preprocessValue(z.coerce.number().refine(val => values.includes(val), { message: `${name} không hợp lệ` }), false),
    // dạng số nguyên vd 123, -456
    int: (name: string, min?: number, max?: number) => preprocessValue(
        z.coerce.number()
            .int(`${name} phải là số nguyên`)
            .refine(val => (min !== undefined ? val >= min : true), { message: `${name} phải >= ${min}` })
            .refine(val => (max !== undefined ? val <= max : true), { message: `${name} phải <= ${max}` }),
        false
    ),
    // dạng số thực vd 12.34, -56.78
    float: (name: string, min?: number, max?: number) => preprocessValue(
        z.coerce.number()
            .refine(val => isFinite(val), { message: `${name} phải là số hữu hạn` })
            .refine(val => (min !== undefined ? val >= min : true), { message: `${name} phải >= ${min}` })
            .refine(val => (max !== undefined ? val <= max : true), { message: `${name} phải <= ${max}` }),
        false
    ),
    // dạng đúng/sai vd true/false
    boolean: (name: string) => preprocessValue(z.boolean(), false),
    // --- FILE / IMAGE / VIDEO ---

    // dạng tệp tin đơn vd  avatar: validators.file("Ảnh đại diện", {
    //types: ["image/jpeg", "image/png"],
    //maxSize: 5_000_000, // 5MB
    //})
    file: (name: string, options?: { types?: string[]; maxSize?: number }) =>
        z.instanceof(File).refine(file => {
            if (!file) return false;
            if (options?.types && !options.types.includes(file.type)) return false;
            if (options?.maxSize && file.size > options.maxSize) return false;
            return true;
        }, {
            message: `${name} không hợp lệ hoặc vượt quá giới hạn`
        }),
    // dạng mảng tệp tin vd  images: validators.files("Ảnh sản phẩm", {
    //types: ["image/jpeg", "image/png"],
    //maxSize: 5_000_000, // 5MB
    //maxFiles: 5
    //})
    files: (name: string, options?: { types?: string[]; maxSize?: number; maxFiles?: number }) =>
        z.array(z.instanceof(File)
            .refine(file => {
                if (!file) return false;
                if (options?.types && !options.types.includes(file.type)) return false;
                if (options?.maxSize && file.size > options.maxSize) return false;
                return true;
            }, { message: `${name} không hợp lệ hoặc vượt quá giới hạn` }))
            .refine(arr => options?.maxFiles ? arr.length <= options.maxFiles : true, { message: `${name} vượt quá số lượng cho phép` })

};

export default validators;
