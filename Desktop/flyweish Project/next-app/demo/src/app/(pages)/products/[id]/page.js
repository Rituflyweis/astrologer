import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductById, getAllProducts } from '../data/products';

// Generate static params for all products (optional - for static generation)
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate metadata for SEO (optional)
export async function generateMetadata({ params }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <Link 
          href="/products" 
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Products
        </Link>
      </nav>

      {/* Product Detail */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 p-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="mb-4">
              <span className="text-3xl font-bold text-green-600">
                {product.price}
              </span>
            </div>

            {/* Rating */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded">
                  In Stock
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                disabled={!product.inStock}
                className={`px-6 py-3 rounded-md font-semibold ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md font-semibold hover:bg-gray-50">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Route Info */}
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          This is a dynamic route: <code className="bg-white px-2 py-1 rounded">/products/{params.id}</code>
          <br />
          File location: <code className="bg-white px-2 py-1 rounded">app/(pages)/products/[id]/page.js</code>
          <br />
          The <code className="bg-white px-2 py-1 rounded">[id]</code> folder creates a dynamic route parameter.
        </p>
      </div>
    </div>
  );
}




