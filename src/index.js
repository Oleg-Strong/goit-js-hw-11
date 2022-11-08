import './css/styles.css';
import { fetchCards } from './utilities-js/fetchCards';
import { createMarkup, clearMarkup } from './utilities-js/markup';
import {
  alertNoEmptySearch,
  alertNoImagesFound,
  alertEndOfSearch,
  alertImagesFound,
} from './utilities-js/alert';
import { pageScrolling, pageScrollingUP } from './utilities-js/scroll';

const formEl = document.querySelector('#search-form');
formEl.addEventListener('submit', onSearch);

const loadMoreBtn = document.querySelector('.load-more-btn');
loadMoreBtn.addEventListener('click', onLoadMore);

let searchQuery = '';
let page = 1;
const perPage = 40;

function onSearch(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.searchQuery.value.trim();
  page = 1;

  if (searchQuery === '') {
    return alertNoEmptySearch();
  }

  fetchCards(searchQuery, page, perPage)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        return alertNoImagesFound();
      }

      alertImagesFound(data);
      clearMarkup();
      createMarkup(data);
      scrollTo(0, 0);

      loadMoreBtn.classList.remove('is-hidden');
      loadMoreBtn.textContent = 'Load more';
    })
    .catch(error => console.log(error))
    .finally(() => {
      formEl.reset();
    });
}

function onLoadMore() {
  page += 1;
  loadMoreBtn.textContent = '...Loading';
  fetchCards(searchQuery, page, perPage)
    .then(({ data }) => {
      createMarkup(data);
      loadMoreBtn.textContent = 'Load more';
      pageScrolling();

      if (document.querySelector('.gallery').children.length > data.totalHits) {
        loadMoreBtn.classList.add('is-hidden');
        alertEndOfSearch();
        return;
      }
    })
    .catch(error => console.log(error));
}
