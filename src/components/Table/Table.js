import React from 'react';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead
} from '@material-ui/core';

const TableTemplate = ({ people }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableCell>NAME</TableCell>
          <TableCell>DESCRIPTION</TableCell>
          <TableCell>URL</TableCell>
        </TableHead>
        <TableBody>
          {people.map(person => (
            <TableRow>
              <TableCell key={person.id}>{person.name}</TableCell>
              <TableCell>{person.desc}</TableCell>
              <TableCell>
                <a href={person.url}>{person.url}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableTemplate;
