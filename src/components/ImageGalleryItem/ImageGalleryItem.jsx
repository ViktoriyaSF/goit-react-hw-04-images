import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ImageModal } from 'components/Modal/ImageModal';
import { StyledImageGalleryItem } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({
  picture: { webformatURL, largeImageURL, tags },
}) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);

  return (
    <StyledImageGalleryItem>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => {
          setSelectedImg(largeImageURL);
          setSelectedTags(tags);
        }}
      />
      {selectedImg && (
        <ImageModal
          isOpen={selectedImg !== null}
          onClose={() => {
            setSelectedImg(null);
          }}
          image={selectedImg}
          alt={selectedTags}
        />
      )}
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};

// export const ImageGalleryItem = ({ pictures }) => {
//   return pictures.map(picture => {
//     return (
//       <li key={picture.id}>
//         <img src={picture.webformatURL} alt={picture.tags} />
//       </li>
//     );
//   });
// };
