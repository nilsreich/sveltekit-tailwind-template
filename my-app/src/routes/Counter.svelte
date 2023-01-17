<script lang='ts'>
	 export let count: number;
</script>

<div>Cool {count}</div>
<button on:click={()=>count++}>Hallo - {count}</button>