import React from 'react';
import PropTypes from 'prop-types';
import NormalButton from './Button.style';

const Button = ({ label, ...rest }) => <NormalButton {...rest}>{label}</NormalButton>;

export default Button;

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'PRINT DATA',
};
