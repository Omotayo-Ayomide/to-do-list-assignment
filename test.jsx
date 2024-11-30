import React, { useState } from 'react';

function getPascalRow(rowIndex) {
    const row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        row.push((row[i - 1] * (rowIndex - i + 1)) / i);
    }
    return row;
}

function PascalRow() {
    const [rowIndex, setRowIndex] = useState(0);
    const [row, setRow] = useState(getPascalRow(0));

    const handleInputChange = (e) => {
        const index = parseInt(e.target.value, 10);
        if (!isNaN(index) && index >= 0) {
            setRowIndex(index);
            setRow(getPascalRow(index));
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Pascal's Triangle Row</h2>
            <input
                type="number"
                value={rowIndex}
                onChange={handleInputChange}
                min="0"
                placeholder="Enter row index"
                style={{ padding: '5px', fontSize: '16px' }}
            />
            <div style={{ marginTop: '10px', fontSize: '18px' }}>
                Row {rowIndex}: {JSON.stringify(row)}
            </div>
        </div>
    );
}

export default PascalRow;
