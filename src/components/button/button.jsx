// import PropTypes from 'prop-types';
import React from 'react';
import classes from './button.module.css';

function Button() {
  return (
    <button
      className={`${classes['btn-base']}`}
      type="button"
      onClick={() => {}}
    >
      Learn More
    </button>
  );
}

// Button.propTypes = {};

export default Button;
