<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import  Drawer  from './Drawer.svelte';
	import Navbar from './Navbar.svelte';

	onMount(() => {
		const { data: { subscription }} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Drawer />
<Navbar />
{#if $page.data.session}
	<button on:click={() => 
		supabaseClient.auth.signOut()}>Sign out</button>
{/if}

<slot />