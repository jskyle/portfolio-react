/* eslint-disable-next-line */
import React from 'react';
import { Card } from 'reactstrap';

const ImageContainer = (image) => (
  <Card>
    <img src={image.src} alt={image.alt} />
  </Card>
);

export default ImageContainer;
