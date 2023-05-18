import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { StyledImageGallery } from './StyledImageGallery';

export const ImageGallery = ({ pictures }) => {
  return (
    <StyledImageGallery>
      {pictures &&
        pictures.map(picture => {
          return <ImageGalleryItem key={picture.id} picture={picture} />;
        })}
    </StyledImageGallery>
  );
};
ImageGallery.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

// export const ImageGallery = ({ pictures }) => {
//   return <ul>{pictures && <ImageGalleryItem pictures={pictures} />}</ul>;
// };
