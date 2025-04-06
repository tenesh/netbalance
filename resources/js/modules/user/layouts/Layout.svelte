<script lang="ts">
    let { children } = $props();
</script>

<div class="flex flex-col w-full max-w-[1440px] m-auto h-full p-6">
    {#if children}
        {@render children()}
    {/if}
</div>
