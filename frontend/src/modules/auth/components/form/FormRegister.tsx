"use client";
import { IconClosedEye, IconProfile, IconEye, IconEmail } from "@/src/components/icon/index";
import { Button, Label, Input, P, Div, Select } from "@/src/components/ui/index";
import React, { useState } from "react";
import { RegisterSchema, RegisterSchemType } from "../../validation/RegisterSchemaType";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hook/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";

const FormRegister = () => {
    const [Type_Input, setType_Input] = useState({
        password: true,
        confirmPassword: true
    });
    const [focus, setFocus] = useState({
        username: false,
        password: false,
        confirmPassword: false,
        email: false,
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


    const { Register, isLoading } = useRegister();
    // viết form hook
    const {
        register, // điền vào input huộc email/username......
        handleSubmit,// xử lý click
        watch,// lấy dữ liệu
        formState: { errors } //lấy lỗi
    } = useForm({
        resolver: zodResolver(RegisterSchema),
        mode: "onChange",
        defaultValues: {
            user_name: "",
            date_of_birth: "",
            email: "",
            gender: "",
            password: "",
            confirmPassword: "",
        }
    })
    const Submit = (data: RegisterSchemType) => {
        console.log("đã đến");

        console.log(data);
        Register(data);

    }
    return (
        <form action=""
            onSubmit={handleSubmit(Submit)}
            className="flex flex-col z-1 w-100 px-10 gap-y-6"
        >
            {/* -------------------------------username------------------------------------ */}
            <Div variant="mauInput1" size="sizeInp1">
                <Label
                    htmlFor="username"
                    variant="mau1"
                    size={(focus.username || watch("user_name") !== "") ? "mau1" : "default"}
                >
                    Tên đăng nhập
                </Label>
                <Input
                    type="text"
                    required
                    id="username"
                    {...register("user_name")}
                    onFocus={handle_focus}
                    onBlur={handle_blur}
                    variant="noOutline"
                />
                <span
                >
                    <IconProfile font={1} px={25} className="text-text-lr" />
                </span>
                {errors.user_name && <P variant="mes" size="mes">! {errors.user_name.message}</P>}
            </Div>
            {/* ---------------------------------------------------------------------------- */}
            {/* -------------------------------Email--------------------------------------- */}
            <Div variant="mauInput1" size="sizeInp1">
                <Label htmlFor="email" variant="mau1" size={(focus.email || watch("email") !== "") ? "mau1" : "default"} >
                    Email
                </Label>
                <Input
                    required
                    type="email"
                    id="email"

                    {...register("email")}
                    onFocus={handle_focus}
                    onBlur={handle_blur}

                    variant="noOutline"

                />
                <span> <IconEmail className="text-text-lr" /></span>
                {errors.email && <P variant="mes" size="mes">! {errors.email.message}</P>}
            </Div>
            {/* ---------------------------------------------------------------------------- */}
            {/* -------------------------------ngày sinh và gt--------------------------------------- */}
            <Div variant="mauInput1" size="sizeInp1" className="border-none px-1 items-center">
                <div className="flex w-full items-center gap-x-1">
                    <Label htmlFor="DateOfBirht">Ngày sinh:</Label>
                    <Input type="date"
                    {...register("date_of_birth")}
                        required
                        id="DateOfBirht"
                        
                        variant="b_b"
                        className="w-auto h-full"
                    />
                </div>
                <Select
                    id=""
                    {...register('gender')}
                    required
                >
                    <option value="" disabled className="text-black" >Giới tính</option>
                    <option value="Nam" className="text-black">Nam</option>
                    <option value="Khác" className="text-black">Nữ</option>
                    <option value="Nữ" className="text-black">Khác</option>
                </Select>
               {errors.date_of_birth && (
                <P variant="mes" size="mes">
                    ! {errors.date_of_birth.message}
                </P>
            )}
            </Div>
            

            {/* ---------------------------------------------------------------------------- */}
            {/* -------------------------------mật khẩu--------------------------------------- */}
            <Div variant="mauInput1" size="sizeInp1">
                <Label htmlFor="password" variant="mau1" size={(focus.password || watch("password") !== "") ? "mau1" : "default"}>
                    Mật khẩu
                </Label>
                <Input
                    required
                    type={Type_Input.password ? "password" : "text"}
                    id="password"
                    {...register("password")}

                    onFocus={handle_focus}
                    onBlur={handle_blur}
                    variant="noOutline"
                />
                <Button
                    variant="icon" size="icon"
                    onClick={(e) => { e.preventDefault(); setType_Input(prev => ({ ...prev, password: !prev.password })) }}
                >
                    {Type_Input.password ? <IconClosedEye font={1} px={25} className="text-gray-500/50" /> : <IconEye font={1} px={25} className="text-text-lr " />}
                </Button>
                {errors.password && <P variant="mes" size="mes">! {errors.password.message}</P>}
            </Div>
            {/* ---------------------------------------------------------------------------- */}
            {/* -------------------------------nhập lại mật khẩu--------------------------------------- */}
            <Div variant="mauInput1" size="sizeInp1">
                <Label htmlFor="confirmPassword" variant="mau1" size={(focus.confirmPassword || watch("confirmPassword") !== "") ? "mau1" : "default"}>
                    Nhập lại mật khẩu
                </Label>
                <Input
                    required
                    type={Type_Input.confirmPassword ? "password" : "text"}
                    id="confirmPassword"
                    {...register("confirmPassword")}

                    onFocus={handle_focus}
                    onBlur={handle_blur}
                    variant="noOutline"
                />
                <Button
                    variant="icon" size="icon"
                    onClick={(e) => { e.preventDefault(); setType_Input(prev => ({ ...prev, confirmPassword: !prev.confirmPassword })) }}
                >
                    {Type_Input.confirmPassword ? <IconClosedEye font={1} px={25} className="text-gray-500/50" /> : <IconEye font={1} px={25} className="text-text-lr " />}
                </Button>
                {errors.confirmPassword && <P variant="mes" size="mes">! {errors.confirmPassword.message}</P>}
            </Div>
            <Button type="submit" size="max" className="text-text3-lr bg-bg-lr  hover:bg-hover-bg-lr" >Đăng ký</Button>

        </form>
    )
}
export default FormRegister;