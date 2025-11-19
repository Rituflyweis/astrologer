"use client";

import CustomTable from '../CustomTable';
import { useRouter } from 'next/navigation';

/**
 * Example 3: Table with custom formatting and row click handler
 */
export default function TableExample3() {
  const router = useRouter();

  // Define columns with custom formatting
  const columns = [
    { id: 'id', label: 'ID', minWidth: 80 },
    { id: 'name', label: 'Name', minWidth: 200 },
    {
      id: 'price',
      label: 'Price',
      minWidth: 120,
      align: 'right',
      format: (value) => {
        if (typeof value === 'string') return value;
        return `$${value.toFixed(2)}`;
      },
    },
    {
      id: 'rating',
      label: 'Rating',
      minWidth: 120,
      align: 'center',
      render: (value) => {
        const stars = '★'.repeat(Math.floor(value || 0));
        return (
          <span style={{ color: '#ffc107', fontSize: '18px' }}>
            {stars} {value?.toFixed(1) || '0.0'}
          </span>
        );
      },
    },
    {
      id: 'reviews',
      label: 'Reviews',
      minWidth: 100,
      align: 'right',
      format: (value) => value?.toLocaleString('en-US') || '0',
    },
    {
      id: 'actions',
      label: 'Actions',
      minWidth: 150,
      render: (value, row) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`Viewing product ${row.id}`);
            }}
            style={{
              padding: '4px 12px',
              backgroundColor: '#2196f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            View
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`Editing product ${row.id}`);
            }}
            style={{
              padding: '4px 12px',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  // Data with various types
  const data = [
    {
      id: 1,
      name: 'Laptop Pro',
      price: 1299.99,
      rating: 4.5,
      reviews: 234,
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 29.99,
      rating: 4.8,
      reviews: 567,
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: 149.99,
      rating: 4.2,
      reviews: 123,
    },
    {
      id: 4,
      name: 'Monitor 27"',
      price: 399.99,
      rating: 4.7,
      reviews: 890,
    },
  ];

  // Handle row click
  const handleRowClick = (row, index) => {
    console.log('Row clicked:', row);
    // Navigate to detail page or show details
    // router.push(`/products/${row.id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Example 3: Table with Custom Formatting and Actions</h2>
      <p>Click on a row to see the row click handler in action (check console).</p>
      <CustomTable
        columns={columns}
        data={data}
        onRowClick={handleRowClick}
        defaultRowsPerPage={5}
      />
    </div>
  );
}

