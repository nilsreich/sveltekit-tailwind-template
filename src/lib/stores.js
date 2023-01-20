import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const drawerOpen = writable(false);

export const todos = writable([]);
if (browser) {
	const todosFromStorage = localStorage.getItem('todos');
	if (todosFromStorage) {
		todos.set(JSON.parse(todosFromStorage));
	}

	todos.subscribe((value) => {
		localStorage.setItem('todos', JSON.stringify(value));
	});
}
export const name = writable('');
