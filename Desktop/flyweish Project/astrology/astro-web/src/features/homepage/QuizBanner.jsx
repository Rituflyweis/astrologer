function QuizBanner() {
  return (
    <div className="bg-white py-6">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="bg-gradient-to-r from-[#481299] to-purple-500 rounded-lg border-2 border-sky-300 p-6">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            {/* Left Side Text */}
            <div className="text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                Play Quiz - Win Free Gifts
              </h3>
              <p className="text-sm text-white/95">
                Play & Win Exciting Prizes
              </p>
            </div>

            {/* Right Side Button */}
            <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 whitespace-nowrap border-2 border-dashed border-sky-300 text-sm">
              START QUIZ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizBanner;

