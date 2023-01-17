<script lang='ts'>
 import Counter from "./Counter.svelte";
	import Toggle from "./Toggle.svelte";
	import { name } from '../store.js'
    let count = 0;
    $: console.log(count);
	let count_value;

    	name.subscribe((value) => {
		count_value = value;
	});

</script>

<h1>Welcome to SvelteKit</h1>
  <a href="/about">About</a>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button class='text-blue-500' on:click={()=>count++}>Hallo - {count}</button>
<Counter bind:count={count}/>
<div class='bg-red-300 p-2 font-semibold'>{count_value}</div>
<Toggle />
