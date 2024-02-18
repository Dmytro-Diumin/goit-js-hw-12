import { refs } from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import { onLoadMoreClick } from './js/onFormSubmit';

refs.formElem.addEventListener('submit', onFormSubmit);
refs.loadBtn.addEventListener('click', onLoadMoreClick);
