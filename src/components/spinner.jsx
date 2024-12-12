
import React from 'react';
import classes from'./spinner.module.css';

const Spinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
