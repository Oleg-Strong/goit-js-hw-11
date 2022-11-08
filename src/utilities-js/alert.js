import { Notify } from 'notiflix/build/notiflix-notify-aio';
export {
  alertNoEmptySearch,
  alertNoImagesFound,
  alertEndOfSearch,
  alertImagesFound,
};
const alertNoEmptySearch = () =>
  Notify.info('Please enter something to search!!!');
const alertNoImagesFound = () =>
  Notify.info(
    'Sorry, there are no images matching your search query. Please try again.'
  );
const alertEndOfSearch = () =>
  Notify.failure("We're sorry, but you've reached the end of search results.");
const alertImagesFound = ({ totalHits }) =>
  Notify.success(`Hooray! We found ${totalHits} images.`);
//   Notify.success(`Hooray! We found ${totalHits} images.`);
