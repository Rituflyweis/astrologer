import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import event1Image from "../../assets/event1.png";
import event2Image from "../../assets/event2.png";
import event3Image from "../../assets/event3.png";

const astroNews = [
  {
    id: 1,
    title: "Live Astrologers",
    image: event1Image,
    iconType: "heart",
  },
  {
    id: 2,
    title: "Live Vastu Experts",
    image: event2Image,
    iconType: "house",
  },
  {
    id: 3,
    title: "Live Astrologers",
    image: event3Image,
    iconType: "heart",
  },
  {
    id: 4,
    title: "Live Numerologists",
    image: event1Image,
    iconType: "star",
  },
  {
    id: 5,
    title: "Live Tarot Reader",
    image: event2Image,
    iconType: "card",
  },
];

// Icon component
const Icon = ({ type }) => {
  const iconStyle = "w-4 h-4 text-[#481299]";
  
  switch (type) {
    case "heart":
      return (
        <svg className={iconStyle} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      );
    case "house":
      return (
        <svg className={iconStyle} fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      );
    case "star":
      return (
        <svg className={iconStyle} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    case "card":
      return (
        <svg className={iconStyle} fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};

function AstroNewsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <h2 className="text-4xl font-bold text-[#481299]">
                Astro News
              </h2>
            </div>
            <p className="text-lg text-[#0C4292]">
              See LIVE astro events instantly
            </p>
          </div>
          <button className="px-6 py-2 border-2 border-[#481299] text-[#481299] rounded-lg font-semibold hover:bg-[#481299] hover:text-white transition-all duration-200">
            SEE ALL NEWS
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
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
            {astroNews.map((news) => (
              <SwiperSlide key={news.id}>
                <div className="cursor-pointer">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading="lazy"
                      />

                      {/* Live Badge */}
                      <div className="absolute bottom-2 left-2 bg-gray-900/90 text-white px-3 py-1.5 rounded flex items-center gap-2 text-xs font-semibold">
                        <Icon type={news.iconType} />
                        <span>{news.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

export default AstroNewsSection;

