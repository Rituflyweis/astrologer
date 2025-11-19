# CustomTable Usage Examples

This directory contains examples showing how to use the `CustomTable` component in different scenarios.

## Example 1: Simple Table with Static Data
**File:** `TableExample1.jsx`

Shows a basic table with static data. No ID-based fetching needed. All data is available upfront.

## Example 2: Table with ID-based Data Fetching
**File:** `TableExample2.jsx`

Demonstrates how to use the table when some rows only have an ID and need to fetch full data. The table automatically detects incomplete rows and fetches data using the `fetchDataById` function.

## Example 3: Table with Custom Formatting and Actions
**File:** `TableExample3.jsx`

Shows advanced features:
- Custom cell rendering with `render` function
- Custom formatting with `format` function
- Action buttons in cells
- Row click handlers

## Example 4: Table with Nested Data Access
**File:** `TableExample4.jsx`

Demonstrates accessing data that's not directly in a key:
- Using string accessors (dot notation) for nested paths like `"user.name"` or `"user.profile.location"`
- Using function accessors for computed values or combining multiple fields
- Accessing deeply nested data structures

## Key Features

### Column Definition
Each column can have:
- `id`: Unique identifier (also used as data key)
- `label`: Column header text
- `accessor`: How to access data from row (optional)
  - **String**: Dot-notation path like `"user.name"` or `"profile.email"` for nested data
  - **Function**: Custom accessor `(row) => any` for computed values
  - **Not provided**: Falls back to using `column.id` as key
- `minWidth`: Minimum column width
- `align`: Text alignment ('left', 'right', 'center')
- `format`: Function to format the value `(value, row, index) => formattedValue`
- `render`: Function to render custom content `(value, row, index) => ReactNode`

### Data Fetching
- If `fetchDataById` is provided, the table will automatically fetch data for rows that only have an ID
- Caching is built-in to avoid duplicate API calls
- Loading indicators show while fetching

### Props
- `columns`: Array of column definitions
- `data`: Array of data objects
- `fetchDataById`: Optional function `(id) => Promise<object> | object`
- `idKey`: Key name for ID field (default: 'id')
- `loading`: Loading state
- `enablePagination`: Enable/disable pagination (default: true)
- `onRowClick`: Callback when row is clicked `(row, index) => void`

