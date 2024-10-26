import { refs } from '../utils/consts';
import * as apiService from '../services/api';
import Notiflix from 'notiflix';
import { Task } from '../types';

function createTaskItem(task: Task): string {
  return `<li data-id="${task.id}" class="${task.isDone ? 'line-through' : ''}"><div><span>${
    task.text
  }</span><button>Delete</button></div></li>`;
}

function fillTasksListFromDB(): void {
  apiService
    .getTasks()
    .then((tasks: Task[]) => {
      const tasksAmount = tasks.length;

      Notiflix.Notify.info(`You have ${tasksAmount} task${tasksAmount > 1 ? 's' : ''}.`);

      // check tasks (arr in DB is empty)
      if (tasksAmount === 0) {
        return;
      }

      // create markup from DB data
      const tasksMarkup = tasks.map(createTaskItem).join('');

      // insert markup to HTML tasks list
      if (refs.list) {
        refs.list.innerHTML = tasksMarkup;
      }
    })
    .catch(err => {
      console.error(err);
      Notiflix.Notify.failure(err.message);
    })
    .finally(() => refs.loader?.classList.add('hidden'));
}

export { createTaskItem, fillTasksListFromDB };
