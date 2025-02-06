
import { Carousel } from "antd";
import useFetch from "hooks/useFetch";
import ImgSkeleton from "ui/ImgSkeleton";


function Gallery() {
  const [img,loading]:any = useFetch("/getBanner?category=job_post")
  return (
    <div className="main-container">
      <Carousel autoplay speed={1000}>
        {loading ? <ImgSkeleton/>: img?.length > 0 ? 
          img.map((data:any)=>{
            return(
              <Slider url={data.banner_link}/>      
            );
          }):
          <ImgSkeleton/>}        
      </Carousel>
    </div>
  );
}

export default Gallery;

function Slider({url}:{url:any}) {
  return (
      <div className="gallery-layout w-full h-[250px] md:h-[450px]">
        <img src={url} alt="banner" className="object-cover w-full h-full"/>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-8"></div>

      {/* Text Overlay */}
 
     

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] text-center text-white z-10">
 
        <div className=" font-poppins w-full py-8 px-4 sm:px-14 text-center">
          <h1 className="text-2xl text-white sm:text-3xl font-semibold mb-2">Build Your Career With CareerBanao</h1>
        </div>
      </div>
    </div>
  );
}



