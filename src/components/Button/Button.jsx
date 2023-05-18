import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonLoad } from './StyledButton';

export const Button = ({ onClick }) => {
  return (
    <StyledButtonLoad type="submit" onClick={onClick}>
      Load more
    </StyledButtonLoad>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
