<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text: string;
	export let id: number;
	export let done: boolean;

	const handleToggle = () => {
		dispatch('toggle', {
			id: id
		});
	};

	const handleDelete = () => {
		dispatch('delete', {
			id: id
		});
	};
</script>

<div class={`${done ? 'line-through' : ''}`}>
	{text}
	<button on:click={handleToggle}>toggle</button>
	<button on:click={handleDelete}>delete</button>
</div>
