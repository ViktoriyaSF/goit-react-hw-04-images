import { Component } from 'react';
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
export class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  handelFormSearch = value => {
    const newQuery = value.trim();
    if (this.state.searchQuery === newQuery) {
      if (newQuery.trim() === '') {
        return Notify.failure(
          'Sorry, the search field cannot be empty. Please enter information to search.'
        );
      }
      return Notify.info('You just searched for that name');
    }
    this.setState({
      searchQuery: newQuery,
      pictures: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: null });
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

        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...fetchedApp.hits],
          };
        });
        // console.log(fetchedApp.hits);
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { pictures, isLoading } = this.state;
    return (
      <Layout>
        <BtnUp />
        <Searchbar onSearch={this.handelFormSearch} />
        <ImageGallery pictures={pictures} />
        {isLoading && <Loader />}
        {pictures.length >= 12 && <Button onClick={this.handleLoadMore} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
