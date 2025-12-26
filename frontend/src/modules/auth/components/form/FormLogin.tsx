"use client";

// gọi các hook sử lý form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

//gọi định dạng dữ liệu login
import { LoginSchema, LoginSchemaType } from "../../validation/LoginSchemaType";

// gọi hàm sử lý login
import { useLogin } from "../../hook/useLogin";

import { IconClosedEye, IconProfile, IconEye, IconGoogle, IconFacebook } from "@/src/components/icon/index";
import React, { useState } from "react";
// các ui 
import { Button, A, Div, Input, P, Label } from "@/src/components/ui";



const FormLogin = () => {
  const { login, isLoading } = useLogin();



  const [Type_Input, setType_Input] = useState(true);
  const [focus, setFocus] = useState({
    userName: false,
    password: false,
  })

  const handle_focus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id;
    setFocus(prev => (
      {
        ...prev,
        [name]: true,
      }
    ))
  }
  const handle_blur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id;
    setFocus(prev => (
      {
        ...prev,
        [name]: false,
      }
    ))
  }



  // viết form hook
  const {
    register,//Dùng để kết nối input với React Hook Form.
    handleSubmit,//Dùng để xử lý submit an toàn
    watch,// dùng để lasy dữ lệu nhập
    formState: { errors } //hiển thị lỗi từ zod
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { user_name: "", password: "" }
  })
  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
    login(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col z-1 w-100 px-10 gap-y-6">
      {/* ---------------------------------username-------------------------------------- */}
      <Div variant="mauInput1" size="sizeInp1">
        <Label htmlFor="userName"
          variant='mau1'
          size={(focus.userName || watch("user_name") !== "") ? "mau1" : "default"}
        >
          Tên đăng nhập
        </Label>
        <Input
          required
          variant="noOutline"
          type="text"
          id="userName"
          {...register("user_name")}
          onFocus={handle_focus}
          onBlur={handle_blur}
        />
        <span
        >
          <IconProfile font={1} px={25} className="text-text-lr" />
        </span>
        {errors.user_name && <P variant="mes" size="mes">! {errors.user_name.message}</P>}
      </Div>
      {/* ---------------------------------pass-------------------------------------- */}
      <Div variant="mauInput1" size="sizeInp1">
        <Label htmlFor="password"
          variant="mau1"
          size={(focus.password || watch("password") !== "") ? "mau1" : "default"}
        >
          Mật khẩu
        </Label>
        <Input
          required
          variant="noOutline"
          type={Type_Input ? "password" : "text"}
          id="password"
          {...register("password")}
          onFocus={handle_focus}
          onBlur={handle_blur}
        />
        <Button
          variant="icon" size="icon"
          onClick={(e) => { e.preventDefault(); setType_Input(prev => !prev) }}
        >
          {Type_Input ?
            <IconClosedEye font={1} px={25} className="text-gray-500/50" />
            :
            <IconEye font={1} px={25} className="text-text-lr " />}
        </Button>
        {errors.password && <P variant="mes" size="mes">! {errors.password.message}</P>}
      </Div>
      {/* ---------------------------------quên pass-------------------------------------- */}
      <A href="#"
        className="text-text2-lr hover:text-hover-text2-lr  justify-start"
      >
        Quên mật khẩu
      </A>
      {/* ---------------------------------dăng nhập-------------------------------------- */}
      <Button type="submit" size="max" className="text-text3-lr bg-bg-lr  hover:bg-hover-bg-lr" >Đăng nhập</Button>
      
    </form>
  )
}
export default FormLogin;