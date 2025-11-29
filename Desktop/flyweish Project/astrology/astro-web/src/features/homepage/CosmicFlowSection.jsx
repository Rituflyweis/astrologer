import cosmicFlowImage from '../../assets/cosmicflowimage.png';

function CosmicFlowSection() {
  return (
    <section className="relative py-20 min-h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cosmicFlowImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content that scrolls over the background */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-12">
        {/* About Cosmic Flow */}
        <div className="mb-12 text-white">
          <h2 className="text-[36px] font-serif font-normal mb-6">
            About Cosmic Flow
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl">
            At Cosmic Flow, we believe in the transformative power of astrology and holistic healing. Our mission is to guide you on a journey of self-discovery and empowerment, using the wisdom of the stars and the healing arts. We offer personalized astrology readings, workshops, and resources to help you understand your unique cosmic blueprint and navigate life's challenges with clarity and purpose.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-12 text-white">
          <h2 className="text-[36px] font-serif font-normal mb-6">
            Our Values
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mb-4">
            We are committed to providing authentic, compassionate, and insightful guidance. Our approach is rooted in integrity, respect, and a deep understanding of the interconnectedness of all things. We honor your individual path and support your growth with empathy and expertise.
          </p>
          <p className="text-lg leading-relaxed max-w-4xl">
            Our team of experienced astrologers and healers brings a wealth of knowledge and passion to their work. With diverse backgrounds and expertise, we offer a holistic approach to healing, integrating astrology with various modalities to support your well-being on all levels.
          </p>
        </div>

        {/* Our Approach */}
        <div className="text-white">
          <h2 className="text-[36px] font-serif font-normal mb-6">
            Our Approach
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl">
            We combine the ancient wisdom of astrology with modern healing techniques to provide a comprehensive and personalized experience. Our readings and workshops are designed to empower you with self-awareness, tools for personal growth, and a deeper connection to your inner wisdom. We believe that healing is a journey, and we are here to support you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CosmicFlowSection;

