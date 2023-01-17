<script lang="ts">

let todos = [
    { id: 1, text: 'Learn Svelte', done:false },
    { id: 2, text: 'Learn SvelteKit', done:false },
    { id: 3, text: 'Learn SvelteKit SSR', done:false },
];

    </script>

<div>About</div>

{#each todos as todo}
    <div>
    <button on:click={()=>todo.done=!todo.done}>{todo.text} - {todo.done}</button>
</div>
{/each}