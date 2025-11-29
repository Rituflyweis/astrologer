import ZodiacSign from './ZodiacSign';

// Zodiac signs data - using Iconify icons
const zodiacSigns = [
  { name: 'Aries', iconName: 'mdi:zodiac-aries' },
  { name: 'Taurus', iconName: 'mdi:zodiac-taurus' },
  { name: 'Gemini', iconName: 'mdi:zodiac-gemini' },
  { name: 'Cancer', iconName: 'mdi:zodiac-cancer' },
  { name: 'Leo', iconName: 'mdi:zodiac-leo' },
  { name: 'Virgo', iconName: 'mdi:zodiac-virgo' },
  { name: 'Libra', iconName: 'mdi:zodiac-libra' },
  { name: 'Scorpio', iconName: 'mdi:zodiac-scorpio' },
  { name: 'Sagittarius', iconName: 'mdi:zodiac-sagittarius' },
  { name: 'Capricorn', iconName: 'mdi:zodiac-capricorn' },
  { name: 'Aquarius', iconName: 'mdi:zodiac-aquarius' },
  { name: 'Pisces', iconName: 'mdi:zodiac-pisces' },
];

function HoroscopeSection() {
  return (
    <section className="bg-white pt-4 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Separator Line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent mb-6"></div>
        
        {/* Heading */}
        <h2 className="text-[36px] font-bold text-[#0C4292] mb-6 text-center">
          What the stars have in store for you with our Weekly Horoscope
        </h2>

        {/* Zodiac Signs Grid */}
        <div className="bg-[#F8F9FB] border border-gray-200 rounded-lg p-8 mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign) => (
              <ZodiacSign 
                key={sign.name}
                name={sign.name}
                iconName={sign.iconName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HoroscopeSection;

