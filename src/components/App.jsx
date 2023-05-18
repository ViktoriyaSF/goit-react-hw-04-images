import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as API from '../service/api-images';
import { Layout } from './Layout/Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { BtnUp } from './BtnUP/BtnUp';
import { GlobalStyle } from './BasicStyles/GlobalStyle';

const ERROR_MSG = 'Sorry try again later 😥';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelFormSearch = value => {
    const newQuery = value.trim();
    if (searchQuery === newQuery) {
      if (newQuery.trim() === '') {
        return Notify.failure(
          'Sorry, the search field cannot be empty. Please enter information to search.'
        );
      }
      return Notify.info('You just searched for that name');
    }
    setSearchQuery(newQuery);
    setPictures([]);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getImg() {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedApp = await API.fetchImages(searchQuery, page);
        if (fetchedApp.hits.length === 0) {
          Notify.warning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (fetchedApp.hits.length < 12 && fetchedApp.hits.length !== 0) {
          Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
        setPictures(prevState => [...prevState, ...fetchedApp.hits]);
      } catch {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
      }
    }
    getImg();
  }, [searchQuery, page]);
  return (
    <Layout>
      <BtnUp />
      <Searchbar onSearch={handelFormSearch} />
      {error && <h1>{error} </h1>}
      <ImageGallery pictures={pictures} />
      {isLoading && <Loader />}
      {pictures.length >= 12 && <Button onClick={handleLoadMore} />}
      <GlobalStyle />
    </Layout>
  );
};
