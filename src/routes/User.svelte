<script lang="ts">
	import { page } from '$app/stores';
</script>

<p>user:</p>
<pre>{JSON.stringify($page.data.session.user, null, 2)}</pre>
