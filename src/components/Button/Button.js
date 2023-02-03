import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ title, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>{title}</button>
);

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
