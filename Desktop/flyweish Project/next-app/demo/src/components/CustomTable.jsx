"use client";

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * CustomTable - A flexible, reusable table component
 * 
 * @param {Array} columns - Array of column definitions
 *   Each column object should have:
 *   - id: string (unique identifier, also used as data key)
 *   - label: string (column header text)
 *   - accessor?: string | Function (how to access data from row)
 *     - string: dot-notation path like "user.name" or "profile.email" for nested data
 *     - Function: (row: object) => any (custom accessor function for computed values)
 *     - If not provided, uses column.id as key
 *   - minWidth?: number (minimum column width)
 *   - align?: 'left' | 'right' | 'center' (text alignment)
 *   - format?: (value: any, row: object) => ReactNode (custom cell renderer)
 *   - render?: (value: any, row: object) => ReactNode (alternative render function)
 * 
 * @param {Array} data - Array of data objects to display
 * 
 * @param {Function} fetchDataById - Optional function to fetch data by ID
 *   Signature: (id: string | number) => Promise<object> | object
 *   If provided, will be called when data items don't have full data
 * 
 * @param {string} idKey - Key name for the ID field in data objects (default: 'id')
 * 
 * @param {boolean} loading - Loading state indicator
 * 
 * @param {boolean} enablePagination - Enable/disable pagination (default: true)
 * 
 * @param {Array} rowsPerPageOptions - Pagination options (default: [10, 25, 100])
 * 
 * @param {number} defaultRowsPerPage - Default rows per page (default: 10)
 * 
 * @param {boolean} stickyHeader - Enable sticky header (default: true)
 * 
 * @param {number} maxHeight - Maximum height of table container
 * 
 * @param {Function} onRowClick - Optional callback when row is clicked
 *   Signature: (row: object, index: number) => void
 * 
 * @param {string} emptyMessage - Message to show when no data (default: 'No data available')
 */
export default function CustomTable({
  columns = [],
  data = [],
  fetchDataById = null,
  idKey = 'id',
  loading = false,
  enablePagination = true,
  rowsPerPageOptions = [10, 25, 100],
  defaultRowsPerPage = 10,
  stickyHeader = true,
  maxHeight = 440,
  onRowClick = null,
  emptyMessage = 'No data available',
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [expandedRows, setExpandedRows] = React.useState(new Set());
  const [loadingRows, setLoadingRows] = React.useState(new Set());
  const [rowDataCache, setRowDataCache] = React.useState(new Map());

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch data by ID if needed
  const handleFetchRowData = React.useCallback(async (row, index) => {
    if (!fetchDataById || !row[idKey]) return;

    const rowId = row[idKey];
    
    // Check if already cached
    if (rowDataCache.has(rowId)) {
      return rowDataCache.get(rowId);
    }

    // Check if already loading
    if (loadingRows.has(rowId)) {
      return;
    }

    // Set loading state
    setLoadingRows(prev => new Set(prev).add(rowId));

    try {
      const fetchedData = await fetchDataById(rowId);
      setRowDataCache(prev => new Map(prev).set(rowId, fetchedData));
      return fetchedData;
    } catch (error) {
      console.error('Error fetching data by ID:', error);
      return null;
    } finally {
      setLoadingRows(prev => {
        const newSet = new Set(prev);
        newSet.delete(rowId);
        return newSet;
      });
    }
  }, [fetchDataById, idKey, rowDataCache, loadingRows]);

  // Get effective row data (use cached data if available)
  const getRowData = React.useCallback((row, index) => {
    if (!row[idKey] || !fetchDataById) {
      return row;
    }

    const rowId = row[idKey];
    const cachedData = rowDataCache.get(rowId);
    
    // If we have cached data, merge it with the original row
    if (cachedData) {
      return { ...row, ...cachedData };
    }

    // If row seems incomplete (has ID but few other fields), try to fetch
    const rowKeys = Object.keys(row).filter(key => key !== idKey);
    if (rowKeys.length < 2 && fetchDataById) {
      handleFetchRowData(row, index);
    }

    return row;
  }, [idKey, fetchDataById, rowDataCache, handleFetchRowData]);

  // Handle row click
  const handleRowClick = (row, index) => {
    if (onRowClick) {
      onRowClick(row, index);
    }
  };

  // Calculate paginated data
  const paginatedData = enablePagination
    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : data;

  // Helper function to get value from row using accessor
  const getValueFromRow = React.useCallback((column, row) => {
    // If accessor is a function, use it
    if (typeof column.accessor === 'function') {
      try {
        return column.accessor(row);
      } catch (error) {
        console.error(`Error accessing data with accessor function for column ${column.id}:`, error);
        return undefined;
      }
    }

    // If accessor is a string path (dot notation), navigate through the object
    if (typeof column.accessor === 'string') {
      try {
        const keys = column.accessor.split('.');
        let value = row;
        for (const key of keys) {
          if (value === null || value === undefined) {
            return undefined;
          }
          value = value[key];
        }
        return value;
      } catch (error) {
        console.error(`Error accessing data with path "${column.accessor}" for column ${column.id}:`, error);
        return undefined;
      }
    }

    // Fallback to using column.id as key
    return row[column.id];
  }, []);

  // Render cell content
  const renderCellContent = (column, row, rowIndex) => {
    const rowId = row[idKey];

    // Check if this row is loading
    if (rowId && loadingRows.has(rowId) && !rowDataCache.has(rowId)) {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size={16} />
        </Box>
      );
    }

    // Get value using accessor
    const value = getValueFromRow(column, row);

    // Use custom render function if provided
    if (column.render) {
      return column.render(value, row, rowIndex);
    }

    // Use format function if provided
    if (column.format) {
      return column.format(value, row, rowIndex);
    }

    // Default: return value or empty string
    return value !== undefined && value !== null ? String(value) : '-';
  };

  if (loading && data.length === 0) {
    return (
      <Paper sx={{ width: '100%', p: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Box>
      </Paper>
    );
  }

  if (data.length === 0) {
    return (
      <Paper sx={{ width: '100%', p: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
          <Typography variant="body1" color="text.secondary">
            {emptyMessage}
          </Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight }}>
        <Table stickyHeader={stickyHeader} aria-label="custom table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => {
              const effectiveRow = getRowData(row, index);
              const rowId = effectiveRow[idKey];
              
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={rowId || index}
                  onClick={() => handleRowClick(effectiveRow, index)}
                  sx={{
                    cursor: onRowClick ? 'pointer' : 'default',
                    '&:hover': onRowClick ? { backgroundColor: 'action.hover' } : {},
                  }}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || 'left'}>
                      {renderCellContent(column, effectiveRow, index)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {enablePagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
