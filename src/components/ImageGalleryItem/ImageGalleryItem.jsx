import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageModal } from 'components/Modal/ImageModal';
import { StyledImageGalleryItem } from './StyledImageGalleryItem';

export class ImageGalleryItem extends Component {
  //  selectedTags - для заповнення поля alt в модалці
  state = {
    selectedImg: null,
    selectedTags: null,
  };

  setSelectedImg = () => {
    const {
      picture: { largeImageURL, tags },
    } = this.props;
    this.setState({
      selectedImg: largeImageURL,
      selectedTags: tags,
    });
  };
  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const { selectedImg, selectedTag } = this.state;
    const {
      picture: { webformatURL, tags },
    } = this.props;
    return (
      <StyledImageGalleryItem>
        <img src={webformatURL} alt={tags} onClick={this.setSelectedImg} />
        {selectedImg && (
          <ImageModal
            isOpen={selectedImg !== null}
            onClose={this.closeModal}
            image={selectedImg}
            alt={selectedTag}
          />
        )}
      </StyledImageGalleryItem>
    );
  }
}

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
