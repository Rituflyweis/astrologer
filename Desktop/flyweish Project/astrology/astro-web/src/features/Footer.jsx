function Footer() {
  return (
    <footer 
      className="bg-gradient-to-r from-[#0C4292] to-[#481299] text-white py-12"
    >
      
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Logo</h2>
            <p className="text-white/90 mb-6 text-sm leading-relaxed">
              We help you exploring your cosmic path
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Company</h3>
            <div className="border-t-2 border-sky-400 mb-4"></div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Contact US
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Services</h3>
            <div className="border-t-2 border-sky-400 mb-4"></div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Tarot weddings
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Kundli Matching
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Numerology
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Business Astrology
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Astrologers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Horoscope
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Vastu
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Birthday Astrology
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Contact Us</h3>
            <div className="border-t-2 border-sky-400 mb-4"></div>
            <ul className="space-y-3">
              <li className="text-white/90">
                booking@celestial.com
              </li>
              <li className="text-white/90">
                (+62) 1234 5678
              </li>
              <li className="text-white/90">
                Oak Building 19, North City
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

