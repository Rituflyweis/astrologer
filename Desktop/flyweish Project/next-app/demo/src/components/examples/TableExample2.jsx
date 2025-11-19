"use client";

import CustomTable from '../CustomTable';
import { useState } from 'react';

/**
 * Example 2: Table with ID-based data fetching
 * Some rows have minimal data (just ID), and we fetch full data on demand
 */
export default function TableExample2() {
  const [loading, setLoading] = useState(false);

  // Define columns
  const columns = [
    { id: 'id', label: 'ID', minWidth: 80 },
    { id: 'name', label: 'Product Name', minWidth: 200 },
    { id: 'price', label: 'Price', minWidth: 100, align: 'right' },
    { id: 'category', label: 'Category', minWidth: 150 },
    {
      id: 'inStock',
      label: 'Stock',
      minWidth: 100,
      render: (value) => (
        <span
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: value ? '#4caf50' : '#f44336',
            color: 'white',
            fontSize: '12px',
          }}
        >
          {value ? 'In Stock' : 'Out of Stock'}
        </span>
      ),
    },
  ];

  // Initial data - some rows have only ID, some have full data
  const data = [
    { id: 1 }, // Minimal data - will fetch full data
    { id: 2, name: 'Product 2', price: '$39.99', category: 'Clothing', inStock: true }, // Full data
    { id: 3 }, // Minimal data - will fetch full data
    { id: 4, name: 'Product 4', price: '$49.99', category: 'Home & Garden', inStock: false }, // Full data
  ];

  // Mock function to fetch data by ID
  const fetchDataById = async (id) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data - in real app, this would be an API call
    const mockData = {
      1: { name: 'Product 1', price: '$29.99', category: 'Electronics', inStock: true },
      3: { name: 'Product 3', price: '$59.99', category: 'Sports', inStock: true },
    };

    setLoading(false);
    return mockData[id] || {};
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Example 2: Table with ID-based Data Fetching</h2>
      <p>Rows with only ID will automatically fetch full data when needed.</p>
      <CustomTable
        columns={columns}
        data={data}
        fetchDataById={fetchDataById}
        loading={loading}
      />
    </div>
  );
}

