import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import event1Image from "../../assets/event1.png";
import event2Image from "../../assets/event2.png";
import event3Image from "../../assets/event3.png";

const shorts = [
  { id: 1, title: "Cosmic Universe", image: event1Image },
  { id: 2, title: "Astrology Desk", image: event2Image },
  { id: 3, title: "Zodiac Wheel", image: event3Image },
];

function AstroShortsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-[#481299] mb-2">Astro Shorts</h2>
            <p className="text-lg text-[#0C4292]">
              A holistic journey to wellness—spiritual, physical, and emotional.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative py-8">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            className="shorts-swiper"
          >
            {shorts.map((short) => (
              <SwiperSlide key={short.id} className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px]">
                <div className="slide-card transition-transform duration-300 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={short.image}
                    alt={short.title}
                    className="w-full h-[350px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button ref={prevRef} className="nav-btn">◀</button>
            <div ref={paginationRef} className="shorts-pagination"></div>
            <button ref={nextRef} className="nav-btn">▶</button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .shorts-swiper .swiper-slide {
          opacity: 0.6;
          transform: scale(0.85);
          transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
        }
        .shorts-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.15) translateY(-20px);
          z-index: 5;
        }
        .nav-btn {
          background-color: white;
          border: 2px solid #481299;
          color: #481299;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .nav-btn:hover {
          background-color: #481299;
          color: #ffffff;
        }
        .shorts-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s;
        }
        .shorts-pagination .swiper-pagination-bullet-active {
          background: #481299;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}

export default AstroShortsSection;
