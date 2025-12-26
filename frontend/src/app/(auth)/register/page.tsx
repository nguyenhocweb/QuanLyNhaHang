import FormRegister from "@/src/modules/auth/components/form/FormRegister";
import { Div, P, A } from "@/src/components/ui";
import { IconGoogle, IconFacebook } from "@/src/components/icon/index";
const RegisterPage = () => {
  return (
    <section
      className={[
        //dành chung cho các kích thước
        "w-full flex items-center justify-center",
        // dành cho máy tính
        //dành cho máy bảng
        //dành cho điện thoại
      ].join(" ")}
    >
      <Div
        variant="mau2"
        vien="vien1"
        round="round1"
        size="size2"
        className="flex-col  py-5"

      >
        <h2 className=
          //dành chung cho các kích thước
          "text-center text-text1-lr font-bold  mb-10 text-[20px] z-1"
        >
          Đăng ký
        </h2>
        <FormRegister />
        <P variant="or" className="z-1">or</P>
        {/* ---------------------------------login gg-fb -------------------------------------- */}
        <Div className="justify-around py-0 z-1" gap="gap6" size="size1">
          <A href="#">
            <IconGoogle className="w-10 h-10 bg-white rounded-full p-2 hover:bg-gray-300" />
          </A>
          <A href="">
            <IconFacebook className="w-10 h-10 bg-white rounded-full p-1 hover:bg-gray-300" />
          </A>
        </Div>
        {/* ---------------------------------đăng ký-------------------------------------- */}
        <Div className="mt-3 z-1" gap="gap1">
          <P>Bạn đã có tài khoản?</P>
          <A href="/login" className="text-text1-lr">Đăng nhập</A>
        </Div>
      </Div>
    </section>
  )
}
export default RegisterPage