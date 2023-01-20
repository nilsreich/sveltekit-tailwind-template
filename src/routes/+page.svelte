<script lang="ts">
	import { page } from '$app/stores';
	import Login from './Login.svelte';
	import User from './User.svelte';
	import Todo from './Todo.svelte';
	import { todos } from '$lib/stores';
	import { onMount } from 'svelte';

	let channel: undefined | BroadcastChannel;
	onMount(async () => {
		channel = new BroadcastChannel('thechannel');
		channel.onmessage = (event) => {
			todos.set(event.data);
		};
	});
	const addTodo = async () => {
		if (name !== '') {
			todos.update((todos) => {
				const newTodo = {
					id: todos.length + 1,
					text: name,
					done: false
				};
				return [...todos, newTodo];
			});
			name = '';
			channel?.postMessage($todos);
		}
	};

	const toggleTodo = (id: number) => {
		todos.update((todos: any) => {
			const todo = todos.find((todo: any) => todo.id === id);
			todo!.done = !todo!.done;
			return todos;
		});
		channel?.postMessage($todos);
	};

	const deleteTodo = (id: number) => {
		// Remove a todo from our list of todos
		todos.update((todos) => {
			return todos.filter((todo) => todo.id !== id);
		});
		channel.postMessage($todos);
	};

	let name = '';
</script>

<h1 class="text-3xl">Welcome to SvelteKit</h1>
{#if !$page.data.session}
	<Login />
{:else}
	<User />
{/if}

<div>
	<input bind:value={name} placeholder="enter your todo" />
	<button on:click={addTodo}>Add</button>
</div>

{#each $todos as { text, id, done }, i}
	<Todo
		{text}
		{id}
		{done}
		on:toggle={(event) => toggleTodo(event.detail.id)}
		on:delete={(event) => deleteTodo(event.detail.id)}
	/>
{/each}
