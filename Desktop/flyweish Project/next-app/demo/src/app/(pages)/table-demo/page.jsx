"use client";

import CustomTable from '@/components/CustomTable';
import { useState } from 'react';

export default function TableDemoPage() {
  const [loading, setLoading] = useState(false);

  // Example 1: Simple columns
  const simpleColumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 200 },
    { id: 'role', label: 'Role', minWidth: 120 },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100,
      render: (value) => (
        <span
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: value === 'Active' ? '#4caf50' : '#f44336',
            color: 'white',
            fontSize: '12px',
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  const simpleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
  ];

  // Example 2: Columns with ID-based fetching
  const productColumns = [
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

  // Some rows have only ID, some have full data
  const productData = [
    { id: 1 }, // Will fetch data
    { id: 2, name: 'Product 2', price: '$39.99', category: 'Clothing', inStock: true },
    { id: 3 }, // Will fetch data
    { id: 4, name: 'Product 4', price: '$49.99', category: 'Home & Garden', inStock: false },
  ];

  // Mock function to fetch data by ID
  const fetchDataById = async (id) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockData = {
      1: { name: 'Product 1', price: '$29.99', category: 'Electronics', inStock: true },
      3: { name: 'Product 3', price: '$59.99', category: 'Sports', inStock: true },
    };

    setLoading(false);
    return mockData[id] || {};
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">CustomTable Component Demo</h1>

      {/* Example 1 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Example 1: Simple Table (No ID Fetching)</h2>
        <p className="text-gray-600 mb-4">
          This table uses static data. All data is available upfront.
        </p>
        <CustomTable columns={simpleColumns} data={simpleData} />
      </section>

      {/* Example 2 */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Example 2: Table with ID-based Data Fetching</h2>
        <p className="text-gray-600 mb-4">
          Some rows have only an ID. The table automatically fetches full data when needed.
          Watch for loading indicators on rows with ID only.
        </p>
        <CustomTable
          columns={productColumns}
          data={productData}
          fetchDataById={fetchDataById}
          loading={loading}
        />
      </section>

      {/* Example 3: Nested Data Access */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Example 3: Table with Nested Data Access</h2>
        <p className="text-gray-600 mb-4">
          When data is not directly in a key (nested objects), use <code className="bg-gray-100 px-2 py-1 rounded">accessor</code> prop:
        </p>
        <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
          <li><strong>String accessor:</strong> Use dot notation like <code className="bg-gray-100 px-1 rounded">"user.profile.email"</code></li>
          <li><strong>Function accessor:</strong> Use functions like <code className="bg-gray-100 px-1 rounded">(row) =&gt; row.user.firstName + " " + row.user.lastName</code></li>
          <li>Accessors handle missing data gracefully</li>
        </ul>
        <CustomTable
          columns={[
            { 
              id: 'id', 
              label: 'ID', 
              minWidth: 80 
            },
            { 
              id: 'fullName', 
              label: 'Full Name', 
              minWidth: 200,
              // Using function accessor to combine multiple fields
              accessor: (row) => `${row.user?.firstName || ''} ${row.user?.lastName || ''}`.trim() || 'N/A'
            },
            { 
              id: 'email', 
              label: 'Email', 
              minWidth: 200,
              // Using string accessor (dot notation) for nested data
              accessor: 'user.profile.email'
            },
            { 
              id: 'department', 
              label: 'Department', 
              minWidth: 150,
              accessor: 'company.department'
            },
            { 
              id: 'location', 
              label: 'Location', 
              minWidth: 150,
              // Using function accessor for computed value
              accessor: (row) => {
                const city = row.address?.city || '';
                const country = row.address?.country || '';
                return city && country ? `${city}, ${country}` : city || country || 'N/A';
              }
            },
            { 
              id: 'salary', 
              label: 'Salary', 
              minWidth: 120,
              align: 'right',
              accessor: 'company.salary',
              format: (value) => value ? `$${value.toLocaleString('en-US')}` : 'N/A'
            },
            {
              id: 'status',
              label: 'Status',
              minWidth: 100,
              accessor: 'user.status',
              render: (value) => (
                <span
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: value === 'Active' ? '#4caf50' : '#f44336',
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  {value || 'Unknown'}
                </span>
              ),
            },
          ]}
          data={[
            {
              id: 1,
              user: {
                firstName: 'John',
                lastName: 'Doe',
                status: 'Active',
                profile: {
                  email: 'john.doe@example.com'
                }
              },
              company: {
                department: 'Engineering',
                salary: 120000
              },
              address: {
                city: 'New York',
                country: 'USA'
              }
            },
            {
              id: 2,
              user: {
                firstName: 'Jane',
                lastName: 'Smith',
                status: 'Active',
                profile: {
                  email: 'jane.smith@example.com'
                }
              },
              company: {
                department: 'Marketing',
                salary: 95000
              },
              address: {
                city: 'London',
                country: 'UK'
              }
            },
            {
              id: 3,
              user: {
                firstName: 'Bob',
                lastName: 'Johnson',
                status: 'Inactive',
                profile: {
                  email: 'bob.johnson@example.com'
                }
              },
              company: {
                department: 'Sales',
                salary: 80000
              },
              address: {
                city: 'Tokyo',
                country: 'Japan'
              }
            },
            {
              id: 4,
              // Some data might be missing - accessors handle this gracefully
              user: {
                firstName: 'Alice',
                lastName: 'Brown',
                status: 'Active',
                profile: {
                  email: 'alice.brown@example.com'
                }
              },
              company: {
                department: 'HR'
                // salary is missing
              },
              address: {
                city: 'Sydney'
                // country is missing
              }
            },
          ]}
        />
      </section>
    </div>
  );
}

