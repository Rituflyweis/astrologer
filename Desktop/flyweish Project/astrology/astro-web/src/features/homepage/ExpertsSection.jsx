import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import pandit1Image from "../../assets/pandit1.png";
import pandit2Image from "../../assets/pandit2.png";
import pandit3Image from "../../assets/pandit3.png";
import pandit4Image from "../../assets/pandit4.png";
import pandit5Image from "../../assets/pandit5.png";

const experts = [
  { id: 1, name: "Pandit Aakyan", image: pandit1Image, isPrime: true, isLive: true },
  { id: 2, name: "Astro Riyadev", image: pandit2Image, isPrime: false, isLive: true },
  { id: 3, name: "Guru Lakshmi Devi", image: pandit3Image, isPrime: true, isLive: true },
  { id: 4, name: "Ratan Josh", image: pandit4Image, isPrime: true, isLive: true },
  { id: 5, name: "Pandit Aaky", image: pandit5Image, isPrime: false, isLive: true },
];

function ExpertsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#0C4292]">
            Meet Our Experts - Live Now
          </h2>
          <button className="px-5 py-2 border-2 border-[#481299] text-[#481299] rounded-lg font-semibold hover:bg-[#481299] hover:text-white transition-all">
            VIEW ALL
          </button>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
              {experts.map((expert) => (
                <SwiperSlide key={expert.id}>
                  <div className="cursor-pointer">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative flex items-center justify-center" style={{ height: '256px' }}>
                        <img 
                          src={expert.image} 
                          alt={expert.name} 
                          className="max-w-full max-h-full w-auto h-auto object-contain" 
                          style={{ display: 'block' }}
                        />

                        {/* PRIME MEMBER Badge - Top Left Corner */}
                        {expert.isPrime && (
                          <div className="absolute top-0 left-0 bg-yellow-400 text-gray-900 px-3 py-1.5 text-xs font-bold rounded-br-lg">
                            PRIME MEMBER
                          </div>
                        )}

                        {/* LIVE Badge */}
                        {expert.isLive && (
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            LIVE
                          </div>
                        )}
                      </div>

                      {/* Expert Name */}
                      <div className="p-4">
                        <h3 className="text-center text-[#0C4292] font-semibold text-base">
                          {expert.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Nav Buttons */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExpertsSection;
