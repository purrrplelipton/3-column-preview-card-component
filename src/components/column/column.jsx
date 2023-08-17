import PropTypes from 'prop-types';
import React from 'react';
import classes from './column.module.css';

function Column({ color_scheme, children }) {
  return (
    <div
      style={{ '--default-clr': color_scheme }}
      className={`${classes.column}`}
    >
      {children}
    </div>
  );
}

Column.defaultProps = {
  color_scheme: '#121212',
};

Column.propTypes = {
  color_scheme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Column;
