import { simpleLightbox } from './simpleLightbox';
import { iziToastRef } from './iziToast';
import { refs } from './refs';

export let totalHits;

function imagesMarkupRef(image) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="modal-info">
      <p>Likes <span class="gallery-info">${likes}</span></p>
      <p>Views <span class="gallery-info">${views}</span></p>
      <p>Comments <span class="gallery-info">${comments}</span></p>
      <p>Downloads <span class="gallery-info">${downloads}</span></p>
    </div>
  </li>`;
}

function renderImage(data) {
  if (!data.hits || data.hits.length === 0) {
    iziToastRef.onError();
  }
  totalHits = data.totalHits;
  const result = data.hits.map(imagesMarkupRef).join('');
  refs.gallery.insertAdjacentHTML('beforeend', result);
  simpleLightbox.refresh();
}

export const renderFunctions = { imagesMarkupRef, renderImage };
