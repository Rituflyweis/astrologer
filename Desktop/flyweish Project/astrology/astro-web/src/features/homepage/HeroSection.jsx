import heroImage from '../../assets/herosection.png';

function HeroSection() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center overflow-hidden pb-8"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/70 to-slate-800/80"></div>
      
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute top-20 left-32 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-40 left-64 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-60 left-96 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-80 right-64 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-48 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-60 right-96 w-1 h-1 bg-white rounded-full"></div>
      </div>

      {/* Content Overlay */}
      <div className="max-w-[1400px] mx-auto px-8 py-16 w-full relative z-20">
        {/* Content */}
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Balance Your Mind, Body & Spirit
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Personalized astrology & holistic healing services
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-slate-700 to-[#481299] text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:-translate-y-1 hover:shadow-lg hover:shadow-[#481299]/50 transition-all duration-200">
              EXPLORE SERVICES
            </button>
            <button className="bg-white text-[#481299] border-2 border-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-transparent hover:text-white hover:border-white transition-all duration-200">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Top Right Banner */}
      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg text-sm font-semibold z-30 shadow-lg">
        Indias 1st App Mind Body & Soul - Solutions Astrology - Ayurveda - Yoga Meditation- Be Your Own Trine Astrologer
      </div>
    </section>
  );
}

export default HeroSection;

