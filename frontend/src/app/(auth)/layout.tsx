import PublicHeader from "@/src/components/layout/pucblic-header-footer/public-header";
import FiveStars from "@/src/components/icon/fiveStars";
const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
       <PublicHeader/>
        <main
        className={[
          // dùng chung cho các kích
          "w-full flex flex-col item-center justify-center ", 
          "lg:min-h-[calc(100vh-100px)]",
          "md:min-h-[calc(100vh-80px)]",
          "min-h-[calc(100vh-60px)]"

        ].join(" ")}
        >{children}</main>
        <footer className="">footer chứa nội dung chung cho trang public
           <FiveStars NumberStar={3.6}/>
        </footer>
    </>
  );
}
export default LayoutAuth;
