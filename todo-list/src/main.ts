import '../common.css';
import '../style.css';
import { fillTasksListFromDB } from './templates/taskListTemplate.js';
import { refs } from './utils/consts.js';
import { handleFormSubmit, handleTaskClick } from './utils/handlers.js';

// load tasks from database
fillTasksListFromDB();

// if (refs.mainForm && refs.list) {
//   refs.mainForm.addEventListener('submit', handleFormSubmit);
//   refs.list.addEventListener('click', handleTaskClick);
// }

refs.mainForm?.addEventListener('submit', handleFormSubmit);
refs.list?.addEventListener('click', handleTaskClick);
