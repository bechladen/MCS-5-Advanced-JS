import { refs } from './consts';
import { createTaskItem } from '../templates/taskListTemplate';
import * as apiService from '../services/api';
import Notiflix from 'notiflix';

function handleFormSubmit(event: Event): void {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  const inputElement = form.elements.namedItem('task') as HTMLInputElement;
  const taskValue = inputElement.value.trim();

  apiService
    .postNewTask({
      text: taskValue,
      isDone: false,
    })
    .then(createdTask => {
      refs.list?.insertAdjacentHTML('beforeend', createTaskItem(createdTask));
    })
    .catch(err => {
      console.error(err);
      Notiflix.Notify.failure(err.message);
    })
    .finally(() => form.reset());
}

function handleTaskClick(event: PointerEvent): void {
  const target = event.target as HTMLElement;

  if (target.tagName === 'SPAN' || target.tagName === 'LI') {
    const liEl = target.closest('li');

    if (liEl === null) {
      return;
    }

    const liId = liEl.dataset.id;

    if (!liId) {
      return;
    }

    apiService
      .updateTask(liId, { isDone: !liEl.classList.contains('line-through') })
      .then(() => liEl.classList.toggle('line-through'))
      .catch(err => {
        console.error(err);
        Notiflix.Notify.failure(err.message);
      });
  } else if (target.tagName === 'BUTTON') {
    const liEl = target.closest('li');

    if (liEl === null) {
      return;
    }

    const liId = liEl.dataset.id;

    if (!liId) {
      return;
    }

    apiService
      .deleteTask(liId)
      .then(() => liEl.remove())
      .catch(err => {
        console.error(err);
        Notiflix.Notify.failure(err.message);
      });
  }
}

export { handleFormSubmit, handleTaskClick };
