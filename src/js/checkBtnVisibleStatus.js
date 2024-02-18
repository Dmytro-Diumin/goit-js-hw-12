import { page } from './onFormSubmit';
import { maxPage } from './onFormSubmit';
import { refs } from './refs';

export function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    refs.loadBtn.classList.add('hidden');
  } else {
    refs.loadBtn.classList.remove('hidden');
  }
}
