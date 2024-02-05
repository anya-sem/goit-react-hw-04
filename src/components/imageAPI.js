import axios from 'axios';

const API_KEY = 'SRSBE8WWfn_b01XKHb1vqW3SugXdop8rAYNstNudDec';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}&lang=en`
  );
  return data;
}