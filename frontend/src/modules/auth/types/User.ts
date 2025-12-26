type User={
    user_name:string,
    name?:string,
    email:string,
    sdt?:string,
    date_of_birht:Date,
    role:"Admin"|"Quản lý nhà hàng"|"Nhân viên nhà hàng"|"Quản lý thương hiệu"|"Nhân viên thương hiêu"|"Khách hàng",
    permissions:Permission[],
    avatar:string
}
type Permission =
  | "create"
  | "read"
  | "update"
  | "delete"
  | "manage_users"
  | "manage_restaurant"
  | "manage_brand";

export default User;