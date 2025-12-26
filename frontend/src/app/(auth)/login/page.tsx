import FormLogin from "@/src/modules/auth/components/form/FormLogin";
import { Div, P, A } from "@/src/components/ui";
import { IconGoogle, IconFacebook } from "@/src/components/icon/index";

const LoginPage = () => {
  return (
    <section
      className={[
        //dành chung cho các kích thước
        "w-full flex  items-center justify-center ",
      ].join(" ")}
    >
      <Div
        variant="mau2"
        vien="vien1"
        round="round1"
        size="size2"
        className="flex-col  py-5"

      >
        <h2 className="text-center text-text1-lr mb-10 font-bold text-[20px] z-1"

        >
          Đăng nhập
        </h2>
        <FormLogin />
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
          <P>Bạn chưa có tài khoản?</P>
          <A href="/register" className="text-text1-lr">Đăng ký</A>
        </Div>
      </Div>
    </section>
  )
}
export default LoginPage