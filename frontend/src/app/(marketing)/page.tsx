import { IconArtBackground } from "@/src/components/icon";
import { Div } from "@/src/components/ui";
const HomePage = () => {
  return (
    <>
      <section className={[
        //dành chung cho các kích thước
        "w-full min-h-screen ",
        // dành cho máy tính
      
        //dành cho máy bảng
 
        //dành cho điện thoại
      ].join(" ")}>
        <IconArtBackground />
        
      </section>
    </>
  );
}
export default HomePage;