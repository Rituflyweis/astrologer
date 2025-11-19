export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          This is a standalone Contact page at route: <code className="bg-gray-100 px-2 py-1 rounded">/contact</code>
        </p>
        <p className="text-lg mb-4">
          All pages inside <code className="bg-gray-100 px-2 py-1 rounded">app/(pages)/</code> 
          automatically become routes, but the <code className="bg-gray-100 px-2 py-1 rounded">(pages)</code> 
          folder name doesn't appear in the URL!
        </p>
        <form className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="your@email.com"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}




