import axios from 'axios';
import { loaderRef } from './loader';

export async function userSearch(searchImg, page) {
  loaderRef.on();
  const API_KEY = '42281278-b9f49de06a3dfc9ed42173e47';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const res = await axios.get(BASE_URL + END_POINT, {
    params: {
      key: API_KEY,
      q: searchImg,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return res.data;
}
