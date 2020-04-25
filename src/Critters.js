import React from 'react'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from '@material-ui/core';

function createData(name, calories, fat, carbs, protein, price) {
    return { name, calories, fat, carbs, protein, price };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 5),
    createData('Eclair', 262, 16.0, 24, 6.0, 5),
    createData('Cupcake', 305, 3.7, 67, 4.3, 6),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 6),
];

function Critters(props) {
    return (
        <TableContainer component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>{props.type}</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Shadow</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Price CJ</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </TableContainer>
    );
}

export default Critters; 