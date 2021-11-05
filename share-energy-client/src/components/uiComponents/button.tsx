import React from 'react';

import PropTypes from 'prop-types';

import { Button, PropTypes as props } from '@material-ui/core';

const UIButton = ({
  text, color, action, callback,
}
: {
  text: string, color: props.Color,
  action?: () => void, callback?: () => any,
}): JSX.Element => {
  const handleClick = () => {
    if (action) {
      action();
    }
    if (callback) {
      callback();
    }
  };

  return (
    <Button onClick={handleClick} variant="contained" color={color}>{text}</Button>
  );
};

UIButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']).isRequired,

};

UIButton.defaultProps = {
  action: () => null,
  callback: undefined,
};

export default UIButton;
