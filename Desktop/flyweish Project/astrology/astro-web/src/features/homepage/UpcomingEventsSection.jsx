const upcomingEvents = [
  {
    id: 1,
    title: "Full Moon Meditation",
    description: "Connect with the lunar energy and find inner peace.",
  },
  {
    id: 2,
    title: "Yoga for Stress Relief",
    description: "Release tension and restore balance with gentle yoga.",
  },
  {
    id: 3,
    title: "Astrology Workshop: Understand Your Birth Chart",
    description: "Unlock the secrets of your cosmic blueprint.",
  },
];

function UpcomingEventsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-[#481299] mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-[#0C4292]">
              Join us for transformative experiences that nurture your mind, body, and spirit.
            </p>
          </div>
          <button className="px-6 py-2 border-2 border-[#481299] text-[#481299] rounded-lg font-semibold hover:bg-[#481299] hover:text-white transition-all duration-200">
            VIEW ALL EVENTS
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg  p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-[#481299] text-base leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEventsSection;

