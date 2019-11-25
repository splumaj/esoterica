import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './style';

export default function FloatingText ({ top, right, bottom, left, children }) {
  return (
    <>
      <Text top={top} right={right} bottom={bottom} left={left}>{children}</Text>
    </>
  )
}

FloatingText.propTypes = {
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  children: PropTypes.element.isRequired
};
