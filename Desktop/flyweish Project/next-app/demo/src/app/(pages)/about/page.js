export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          This is a standalone About page at route: <code className="bg-gray-100 px-2 py-1 rounded">/about</code>
        </p>
        <p className="text-lg">
          Notice: This page is inside <code className="bg-gray-100 px-2 py-1 rounded">app/(pages)/about/</code> 
          but the URL is just <code className="bg-gray-100 px-2 py-1 rounded">/about</code>
        </p>
        <p className="text-lg mt-4">
          The <code className="bg-gray-100 px-2 py-1 rounded">(pages)</code> folder is a Route Group - 
          it organizes your routes but doesn't appear in the URL!
        </p>
      </div>
    </div>
  );
}




