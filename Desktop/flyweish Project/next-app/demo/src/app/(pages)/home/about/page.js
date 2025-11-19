export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          This is the About page under /home route. In a large project, you can
          have multiple pages like this, each in its own folder with a page.js file.
        </p>
        <p className="text-lg">
          All pages under /home share the same layout (navigation bar, footer, etc.)
          defined in home/layout.js
        </p>
      </div>
    </div>
  );
}




