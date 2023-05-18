import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '34347073-8f1b60398676bada9d735fc2f';
// const restAPI = '&image_type=photo&orientation=horizontal&safesearch=true';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/?key=${KEY}`, {
    params: {
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
  // console.log(response.data);
  return response.data;
};

// console.log(fetchImages());
