import React, { useState } from "react";
import { render } from "react-dom";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import './styles/styles.scss';

const rows = [
    {person: 'Me', age: 35},
    {person: 'Myself', age: 35},
    {person: 'I', age: 30},
];


function App() {
    return (
        <>
            <Button variant="contained" color="primary">
                I'm a Material UI Button
            </Button>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Person</TableCell>
                            <TableCell align="right">Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.person}>
                            <TableCell>{row.person}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

render(<App />, document.getElementById("root"));
