type Refs = {
  mainForm: HTMLFormElement | null;
  list: HTMLElement | null;
  loader: HTMLElement | null;
};

const refs: Refs = {
  mainForm: document.querySelector('#mainForm'),
  list: document.querySelector('.js-list'),
  loader: document.querySelector('.js-loader'),
};

export { refs };
