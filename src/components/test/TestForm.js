import React from 'react';
import { getTests } from 'store/actions';

const TestForm = ({ isLoading, people }) => {
  return (
    <>
      <h2>TestForm</h2>
      <ul>{people && people.map(person => <li>{person.name}</li>)}</ul>
    </>
  );
};

export default TestForm;
