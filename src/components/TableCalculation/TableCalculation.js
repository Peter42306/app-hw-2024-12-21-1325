import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TableCalculation.css';
import { Button, Form, Table } from 'react-bootstrap';

const TableCalculation = () => {
  const [rows, setRows] = useState([{ id: Date.now(), values: Array(4).fill('') }]);

  const handleInputChange = (rowId, colIndex, value) => {
    const updatedRows = rows.map(row =>
      row.id === rowId
        ? { ...row, values: row.values.map((val, idx) => (idx === colIndex ? value : val)) }
        : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), values: Array(4).fill('') }]);
  };

  const handleDeleteRow = (rowId) => {
    setRows(rows.filter(row => row.id !== rowId));
  };

  const calculateRowSum = (values) => {
    return values.reduce((sum, value) => sum + (parseFloat(value) || 0), 0).toFixed(2);
  };

  return (
    <div className="dynamic-table">
      <Button variant="success" onClick={handleAddRow}>
        Add Row
      </Button>
      <Table variant="">
        <thead>
          <tr>
            <th>#</th>
            <th>Column 1</th>            
            <th>Column 4</th>
            <th>Sum</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              {row.values.map((value, idx) => (
                <td key={idx}>
                  <Form.Control
                    type="number"
                    value={value}
                    onChange={(e) => handleInputChange(row.id, idx, e.target.value)}
                    className='input-area'
                  />
                </td>
              ))}
              <td>{calculateRowSum(row.values)}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteRow(row.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );



  // const [rows, setRows] = useState([{ id: Date.now(), values: Array(5).fill('') }])  

  // const handleInputChange = (rowId, colIndex, value) => {
  //   const updatedRows = rows.map(row => 
  //     row.id === rowId
  //       ? { ...row, values: row.values.map((val, idx) => (idx === colIndex ? value : val)) }
  //       : row
  //   );
  //   setRows(updatedRows);
  // };

  // const handleAddRow = () => {
  //   setRows([...rows, { id: Date.now(), values: Array(5).fill('') }]);
  // };

  // const handleDeleteRow = (rowId) => {
  //   setRows(rows.filter(row => row.id !== rowId));
  // };

  // const calculateRowSum = (values) => {
  //   return values.reduce((sum, value) => sum + (parseFloat(value) || 0), 0).toFixed(2);
  // };
  // return (
  //   <div className="excel-table">
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Column 1</th>
  //           <th>Column 2</th>
  //           <th>Column 3</th>
  //           <th>Column 4</th>
  //           <th>Column 5</th>
  //           <th>Sum</th>
  //           <th>Actions</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {rows.map(row => (
  //           <tr key={row.id}>
  //             {row.values.map((value, index) => (
  //               <td key={index}>
  //                 <input
  //                   type="number"
  //                   value={value}
  //                   onChange={(e) => handleInputChange(row.id, index, e.target.value)}
  //                 />
  //               </td>
  //             ))}
  //             <td>{calculateRowSum(row.values)}</td>
  //             <td>
  //               <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     <button onClick={handleAddRow}>Add Row</button>
  //   </div>
  // );

};

TableCalculation.propTypes = {};

TableCalculation.defaultProps = {};

export default TableCalculation;
