import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { ListContainer } from 'containers';
import { LoadingForm } from 'components';

const i = {
  url: '/blog/1/100',
  tableHead: ['NAME', 'DESCRIPTION']
};

const BlogListForm = ({}) => {
  return (
    <>
      <h1>BlogList</h1>
      <ListContainer url={i.url} tableHead={i.tableHead} />
    </>
  );
};

// const BlogListForm = ({ people, completed, classes }) => {
//   return people.map(person => {
//     return (
//       <TableRow>
//         <TableCell key={person._id} value={person.name}>
//           <a href={person.url}>{person.name}</a>
//         </TableCell>
//         <TableCell>{person.desc}</TableCell>
//       </TableRow>
//     );
//   });
// };

export default BlogListForm;
