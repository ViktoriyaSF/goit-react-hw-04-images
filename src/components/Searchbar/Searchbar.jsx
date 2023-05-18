import { useState } from 'react';
import PropTypes from 'prop-types';

import { FiSearch } from 'react-icons/fi';
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormInput,
} from './StyledSearchbar';

export const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = evt => {
    const { value } = evt.currentTarget;
    setSearchQuery(value.toLowerCase().trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchFormButton type="submit">
          <span>
            <FiSearch size="1.5em" />
          </span>
        </StyledSearchFormButton>
        <StyledSearchFormInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleSearchQuery}
          value={searchQuery}
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
