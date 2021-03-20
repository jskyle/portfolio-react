import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Video from './Video';

const typeMap = {
  image: Image,
  video: Video,
};

const AtomicBlock = ({ type, ...props }) => {
  const Component = typeMap[type];
  if (Component) {
    return <Component {...props} />;
  }
  return null;
};

AtomicBlock.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AtomicBlock;
