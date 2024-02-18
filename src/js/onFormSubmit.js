import { refs } from './refs';
import { iziToastRef } from './iziToast';
import { userSearch } from './pixabay-api';
import { loaderRef } from './loader';
import { renderFunctions } from './render-functions';
import { checkBtnVisibleStatus } from './checkBtnVisibleStatus';

export let page;
export let maxPage;
export let searchImg;

export async function onFormSubmit(e) {
  e.preventDefault();
  searchImg = refs.formInput.value.trim();
  page = 1;

  if (searchImg === '') {
    return iziToastRef.onShow();
  }

  loaderRef.on();

  try {
    const res = await userSearch(searchImg, page);
    maxPage = Math.ceil(res.totalHits / 15);
    refs.gallery.innerHTML = '';
    renderFunctions.renderImage(res);
  } catch (error) {
    iziToastRef.onError();
  } finally {
    loaderRef.off();
    checkBtnVisibleStatus();
    e.target.reset();
  }
}

export async function onLoadMoreClick() {
  page += 1;
  loaderRef.on();
  const res = await userSearch(searchImg, page);
  renderFunctions.renderImage(res);
  checkBtnVisibleStatus();
  loaderRef.off();

  if (page >= maxPage) {
    iziToastRef.onInfo();
  }

  const lastImage = refs.gallery.lastElementChild;
  const lastImageHeight = lastImage.getBoundingClientRect().height * 2;
  window.scrollBy({ top: lastImageHeight, behavior: 'smooth' });
}
