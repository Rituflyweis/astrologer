import astrologersImage from '../../assets/astrologers.png';
import ayurvedaImage from '../../assets/ayurveda.png';
import yogaImage from '../../assets/yoga.png';

const services = [
  {
    id: 1,
    title: 'Astrologers & Tarot',
    description: "Gain insights into your life's path and potential.",
    image: astrologersImage,
    iconName: 'mdi:cog',
    iconColor: '#481299',
    gradient: 'from-purple-500 to-[#481299]',
  },
  {
    id: 2,
    title: 'Ayurveda Doctors',
    description: 'Consult with experienced Ayurveda practitioners.',
    image: ayurvedaImage,
    iconName: 'mdi:leaf',
    iconColor: '#16a34a',
    gradient: 'from-green-600 to-green-800',
  },
  {
    id: 3,
    title: 'Yoga & Meditation',
    description: 'Find inner peace and enhance your well-being.',
    image: yogaImage,
    iconName: 'mdi:yoga',
    iconColor: '#eab308',
    gradient: 'from-amber-600 to-yellow-700',
  },
];

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Heading */}
        <div className="text-left mb-10">
          <h2 className="text-4xl font-bold text-[#481299] mb-3">
            SERVICES
          </h2>
          <p className="text-xl text-[#0C4292]">
            Discover Your Path in the Stars with Us
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            // Generate icon URL from Iconify with service-specific color
            const iconColor = service.iconColor.replace('#', '%23');
            const iconUrl = `https://api.iconify.design/${service.iconName}.svg?color=${iconColor}&width=20&height=20`;
            
            return (
              <div
                key={service.id}
                className="flex flex-col items-center text-center"
              >
                {/* Circular Icon Container */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-b ${service.gradient} flex items-center justify-center mb-6 shadow-lg overflow-hidden`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-28 h-28 object-contain"
                  />
                </div>

                {/* Title with Icon */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <img
                    src={iconUrl}
                    alt=""
                    className="w-5 h-5"
                  />
                  <h3 className="text-xl font-semibold text-[#481299]">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#481299] text-base leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

