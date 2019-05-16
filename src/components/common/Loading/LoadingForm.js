import React from 'react';
import { CircularProgress } from '@material-ui/core';
import 'assets/styles/page.css';

const LoadingForm = ({ completed, progress }) => {
  return (
    <div className="progress-bar">
      <CircularProgress className={progress} value={completed} />
    </div>
  );
};

export default LoadingForm;
