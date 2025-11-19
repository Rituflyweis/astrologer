"use client";

import CustomTable from '../CustomTable';

/**
 * Example 4: Table with Nested Data Access
 * Shows how to access data that's not directly in a key using accessor prop
 */
export default function TableExample4() {
  // Define columns with accessors for nested data
  const columns = [
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
  ];

  // Data with nested structure
  const data = [
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
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Example 4: Table with Nested Data Access</h2>
      <p>
        This example shows how to access nested data using the <code>accessor</code> prop:
      </p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><strong>String accessor:</strong> Use dot notation like <code>"user.profile.email"</code></li>
        <li><strong>Function accessor:</strong> Use functions like <code>(row) =&gt; row.user.firstName + " " + row.user.lastName</code></li>
        <li>Accessors handle missing data gracefully</li>
      </ul>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}

