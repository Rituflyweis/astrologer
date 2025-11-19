import Link from 'next/link';
import { getAllProducts } from './data/products';

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {product.price}
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 text-center">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          This page is at <code className="bg-white px-2 py-1 rounded">/products</code>
          <br />
          Click on any product to view its detail page at:{' '}
          <code className="bg-white px-2 py-1 rounded">/products/[id]</code>
          <br />
          File location: <code className="bg-white px-2 py-1 rounded">app/(pages)/products/page.js</code>
        </p>
      </div>
    </div>
  );
}

