export default function ServicesPage() {
  const services = [
    {
      name: 'Service 1',
      description: 'Detailed description of service 1',
      price: '$99',
    },
    {
      name: 'Service 2',
      description: 'Detailed description of service 2',
      price: '$149',
    },
    {
      name: 'Service 3',
      description: 'Detailed description of service 3',
      price: '$199',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="text-3xl font-bold text-blue-600">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}




