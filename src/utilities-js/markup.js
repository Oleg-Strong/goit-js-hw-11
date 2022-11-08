export { createMarkup, clearMarkup };
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryConteiner = document.querySelector('.gallery');
let simpleLightBox = new SimpleLightbox('.gallery a');

function createMarkup({ hits }) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `  
    <a class="gallery__link" href="${largeImageURL}"
      ><img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes: </b><span>${likes}</span>
        </p>
        <p class="info-item">
          <b>Views: </b><span>${views}</span>
        </p>
        <p class="info-item">
          <b>Comments: </b><span>${comments}</span>
        </p>
        <p class="info-item">
          <b>Downloads: </b><span>${downloads}</span>
        </p>
      </div></a
    >`
    )
    .join('');
  galleryConteiner.insertAdjacentHTML('beforeend', markup);
  simpleLightBox.refresh();
}
function clearMarkup() {
  galleryConteiner.innerHTML = '';
}
