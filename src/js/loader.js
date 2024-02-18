import { refs } from './refs';

function on() {
  refs.loader.classList.remove('hidden');
}

function off() {
  refs.loader.classList.add('hidden');
}

export const loaderRef = { on, off };
