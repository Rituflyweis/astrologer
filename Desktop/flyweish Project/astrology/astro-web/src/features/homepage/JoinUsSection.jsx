import { useState } from 'react';

function JoinUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="max-w-2xl">
          {/* Title */}
          <h2 className="text-4xl font-bold text-[#481299] mb-8 text-left">
            Join Us As
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
                required
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label htmlFor="role" className="block text-gray-900 font-semibold mb-2">
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#481299] text-gray-700 appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="astrologer">Astrologer</option>
                  <option value="vastu-expert">Vastu Expert</option>
                  <option value="numerologist">Numerologist</option>
                  <option value="tarot-reader">Tarot Reader</option>
                  <option value="ayurveda-doctor">Ayurveda Doctor</option>
                  <option value="yoga-instructor">Yoga Instructor</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-[#481299] border-gray-300 rounded focus:ring-[#481299] cursor-pointer"
                required
              />
              <label htmlFor="agreeToTerms" className="text-gray-700 cursor-pointer">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0C4292] to-[#481299] text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              SUBMIT & JOIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JoinUsSection;

