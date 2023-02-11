import React from 'react';
import { PropTypes } from 'prop-types';
import './Input.css';

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    style={{
      width: '100%',
      paddingLeft: '12px',
      height: '40px',
      borderRadius: '4px',
      fontSize: '16px',
      border: '1px solid #e8e8e8',
      '&:focus': {
        borderColor: '#0290ff',
      },
    }}
  />
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
