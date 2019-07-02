import React from 'react';
import { Button } from '@material-ui/core';

const ButtonForm = ({ total }) => {
  return (
    <div className="button-form">
      <Button
        size="small"
        variant="contained"
        color="primary"
        aria-label="Small contained button group">
        총
      </Button>
      <Button
        size="small"
        variant="contained"
        color="default"
        aria-label="Small contained button group">
        {total}
      </Button>
    </div>
  );
};

export default ButtonForm;
