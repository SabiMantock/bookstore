import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({
  defaultProps = false,
  title,
  className,
  onClick,
}) => (
  <>
    {
      defaultProps
        ? <button type="submit" className={className}>{title}</button>
        : <button type="button" className={className} onClick={onClick}>{title}</button>
    }
  </>

);

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  defaultProps: PropTypes.bool.isRequired,
};
