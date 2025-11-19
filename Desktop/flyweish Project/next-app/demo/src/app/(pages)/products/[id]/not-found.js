"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductNotFound() {
  const {id} = useParams()
  console.log(id)
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The product you're looking for doesn't exist.
      </p>
      <Link
        href="/products"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Back to Products
      </Link>
    </div>
  );
}




