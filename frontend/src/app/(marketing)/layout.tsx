import PublicHeader from "@/src/components/layout/pucblic-header-footer/public-header";
import FiveStars from "@/src/components/icon/fiveStars";
const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
       <PublicHeader/>
        <main
        className={[
          // dùng chung cho các kích
          "min-h-[calc(100vh)]  w-full flex flex-col item-center ", 
      
        ].join(" ")}
        >{children}</main>
        <footer className="">to
           <FiveStars NumberStar={3.6}/>
        </footer>
    </>
  );
}
export default LayoutHome;
