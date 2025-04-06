<script lang="ts">
    import type { Snippet } from 'svelte';

    let { title, children } = $props<{ title: string; children: Snippet }>();
</script>

<div class="pt-3">
    <p class="text-xs text-neutral-500 pb-1">{title}</p>
    {#if children}
        {@render children()}
    {/if}
</div>
