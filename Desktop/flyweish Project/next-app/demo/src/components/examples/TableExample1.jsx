"use client";

import CustomTable from '../CustomTable';

/**
 * Example 1: Simple table with static data (no ID fetching)
 */
export default function TableExample1() {
  // Define columns
  const columns = [
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

  // Static data (no ID fetching needed)
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Example 1: Simple Table with Static Data</h2>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}

