import { useState } from 'react';

function Header() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <header className="bg-white w-full shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#481299] to-purple-500 bg-clip-text text-transparent">
            LOGO
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 flex-1 justify-center">
          <a href="/" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Home
          </a>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <a href="/services" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300 flex items-center gap-1">
              Services
              <span className="text-xs">▼</span>
            </a>
            
            {showServicesDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 mt-2 min-w-[220px] z-50">
                <a href="/services/birthday-astrology" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                  <span className="text-xs">‹</span>
                  Birthday Astrology
                </a>
                <a href="/services/business-astrology" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200">
                  Business Astrology
                </a>
                <a href="/services/zodiac-wellness" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200">
                  Zodiac Wellness
                </a>
                <a href="/services/kundli-match" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200">
                  Kundli Match
                </a>
                <a href="/services/numberology" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200">
                  Numberology
                </a>
                <a href="/services/horoscope" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200">
                  Horoscope
                </a>
                <a href="/services/tarot-reading" className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200">
                  Tarot Reading
                </a>
              </div>
            )}
          </div>
          
          <a href="/astrologers" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Astrologers
          </a>
          <a href="/events" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Events
          </a>
          <a href="/learn" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Learn astrology
          </a>
          <a href="/about" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            About Us
          </a>
          <a href="/contact" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Contact Us
          </a>
        </nav>

        {/* Right Side Icons and Buttons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Search Icon */}
          <button 
            className="bg-transparent border-0 text-gray-600 cursor-pointer p-2 hover:text-[#481299] transition-colors duration-300 flex items-center justify-center" 
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          
          {/* Chat Icon */}
          <button 
            className="bg-transparent border-0 text-gray-600 cursor-pointer p-2 hover:text-[#481299] transition-colors duration-300 flex items-center justify-center" 
            aria-label="Chat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          
          {/* LOGIN Button */}
          <button className="bg-gradient-to-b from-[#481299] to-[#0C4292] text-white border-0 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#481299]/40 transition-all duration-200 active:translate-y-0">
            LOGIN
          </button>
          
          {/* GET THE APP Button */}
          <button className="bg-gradient-to-b from-[#481299] to-[#0C4292] text-white border-0 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#481299]/40 transition-all duration-200 active:translate-y-0">
            GET THE APP
          </button>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
    </header>
  );
}

export default Header;
