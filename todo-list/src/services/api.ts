import axios, { AxiosResponse } from 'axios';
import { Task } from '../types';

axios.defaults.baseURL = 'https://671c949a09103098807a86ca.mockapi.io';

const getTasks = (): Promise<Task[]> => axios.get('/todos').then((res: AxiosResponse) => res.data);

const postNewTask = (task: Task): Promise<Task> =>
  axios.post('/todos', task).then((res: AxiosResponse) => res.data);

const deleteTask = (id: string): Promise<Task> =>
  axios.delete(`/todos/${id}`).then((res: AxiosResponse) => res.data);

const updateTask = (id: string, updatedTask: Partial<Task>): Promise<Task> =>
  axios.put(`/todos/${id}`, updatedTask).then((res: AxiosResponse) => res.data);

export { getTasks, postNewTask, deleteTask, updateTask };
