import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { banner1, banner2, banner3, bike, helmet, jacket } from "../assets";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <section
            className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat w-full h-full relative"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="container w-[90%] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8">
              <div className="text-[#d4d4d4] space-y-4">
                <h1 className="text-4xl lg:text-[56px] xl:text-[70px] font-black leading-tight">
                  OVERTAKING <br /> COMPLETION
                </h1>
                <p className="text-lg lg:text-xl">www.motohead.com</p>
                <button className="py-[9px] px-[25px] rounded-full bg-gradient-to-r from-[#000] to-[#3533cd]">
                  Scroll Down
                </button>
              </div>
              <img
                src={helmet}
                alt="Helmet"
                className="w-40 md:w-56 lg:w-[450px] xl:w-[550px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-[56px] xl:text-[70px] font-bold leading-tight text-[#ffffff30] absolute bottom-8 lg:bottom-12 right-4 lg:right-12">
              FIND THE RIDING GEARS
            </h1>
          </section>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <section
            className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat w-full h-full relative"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="container w-[90%] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8">
              <div className="text-[#d4d4d4] space-y-4">
                <h1 className="text-4xl lg:text-[56px] xl:text-[70px] font-black leading-tight">
                  MODIFY YOUR <br /> COMPANION
                </h1>
                <p className="text-lg lg:text-xl">www.motohead.com</p>
                <button className="py-[9px] px-[25px] rounded-full bg-gradient-to-r from-[#000] to-[#ff0000]">
                  Scroll Down
                </button>
              </div>
              <img
                src={bike}
                alt="Bike"
                className="w-40 md:w-56 lg:w-[550px] xl:w-[700px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-[56px] xl:text-[70px] font-bold leading-tight text-[#ffffff30] absolute bottom-8 lg:bottom-12 right-4 lg:right-12">
              FIND THE RIDING GEARS
            </h1>
          </section>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <section
            className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat w-full h-full relative"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="container w-[90%] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8">
              <div className="text-[#d4d4d4] space-y-4">
                <h1 className="text-4xl lg:text-[56px] xl:text-[70px] font-black leading-tight">
                  ENSURE SAFETY IN <br /> YOUR RIDES
                </h1>
                <p className="text-lg lg:text-xl">www.motohead.com</p>
                <button className="py-[9px] px-[25px] rounded-full bg-gradient-to-r from-[#000] to-[#baff10]">
                  Scroll Down
                </button>
              </div>
              <img
                src={jacket}
                alt="Jacket"
                className="w-40 md:w-56 lg:w-[400px] xl:w-[500px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-[56px] xl:text-[70px] font-bold leading-tight text-[#ffffff30] absolute bottom-8 lg:bottom-12 right-4 lg:right-12">
              FIND THE RIDING GEARS
            </h1>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
``;
