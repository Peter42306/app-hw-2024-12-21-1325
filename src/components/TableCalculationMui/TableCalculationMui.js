import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TableCalculationMui.css';
import { DataGrid } from '@mui/x-data-grid';

import { v4 as uuidv4 } from 'uuid';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper } from '@mui/material';

const TableCalculationMui = () =>{

  const [rows, setRows] = useState([
    { id: 1, value1: '', value2: '', sum: 0 },
  ]);

  // Добавление новой строки
  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, value1: '', value2: '', sum: 0 }]);
  };

  // Удаление строки
  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Обновление значений и пересчет
  const updateRow = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id
        ? {
            ...row,
            [field]: value,
            sum:
              field === 'value1' || field === 'value2'
                ? parseFloat(row.value1 || 0) + parseFloat(row.value2 || 0) + (field === 'value1' ? parseFloat(value || 0) - parseFloat(row.value1 || 0) : parseFloat(value || 0) - parseFloat(row.value2 || 0))
                : row.sum,
          }
        : row
    );
    setRows(updatedRows);
  };

  return (
    <div>
      <button onClick={addRow}>Add Row</button>
      <table border="1" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Value 1</th>
            <th>Value 2</th>
            <th>Sum</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input                
                  type="number"
                  value={row.value1}
                  onChange={(e) => updateRow(row.id, 'value1', e.target.value)}
                  style={{border:'none', outline:'none', textAlign:'center', width:'100%'}}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.value2}
                  onChange={(e) => updateRow(row.id, 'value2', e.target.value)}
                />
              </td>
              <td>{row.sum.toFixed(3)}</td>
              <td>
                <button onClick={() => deleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>      
    </div>
  );
};


TableCalculationMui.propTypes = {};

TableCalculationMui.defaultProps = {};

export default TableCalculationMui;
