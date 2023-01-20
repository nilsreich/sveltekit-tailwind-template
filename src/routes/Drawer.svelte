<script lang='ts'>
    import {drawerOpen} from '$lib/stores';

const toggle=() => {
    drawerOpen.set(!drawerOpen);
}


</script>

<div class={$drawerOpen?'flex absolute w-full h-screen bg-black bg-opacity-30':'hidden absolute w-full h-screen bg-black bg-opacity-70'}>
    <div class="bg-white border-r w-80 h-screen">Drawer</div>
    <div class=" grow" on:keydown={()=>toggle()} on:click={()=>toggle()}></div>
</div>

