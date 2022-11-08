import axios from 'axios';
export { fetchCards };
const API_KEY = '31074233-b2aee5c3766edda560e5e1ee4';
const BASE_YRL = 'https://pixabay.com/api/';
const fetchCards = async (name, page, perPage) => {
  return await axios.get(
    `${BASE_YRL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
};
