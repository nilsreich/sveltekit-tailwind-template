<script>
    import {drawerOpen} from '$lib/stores';


    const toggle=() => {
    drawerOpen.update(n=>!n);
}
</script>

<div  class="w-full border-b">
    <button on:click={()=>toggle()} class="border">Logo</button>
</div>