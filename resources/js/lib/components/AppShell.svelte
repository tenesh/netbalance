<script lang="ts">
    import type { Snippet } from 'svelte';

    let { children } = $props<{ children: Snippet }>();
</script>

<main class="flex">
    {#if children}
        {@render children()}
    {/if}
</main>
