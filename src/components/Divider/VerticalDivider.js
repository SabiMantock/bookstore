import React from 'react';
import { PropTypes } from 'prop-types';

const Divider = ({
  type,
}) => (

  <div
    style={{
      width: '2px',
      height: type ? '24px' : '70px',
      background: '#e8e8e8',
      margin: type ? '0' : '50px',
    }}
  />

);

export default Divider;

Divider.propTypes = {
  type: PropTypes.bool.isRequired,
};
