<script lang="ts">
    import { Link } from '@inertiajs/svelte';
    import type { Snippet } from 'svelte';

    let { url, matchUrl, label, children } = $props<{
        url: string;
        matchUrl: string;
        label: string;
        children: Snippet;
    }>();
</script>

<div class="my-1">
    <Link
        href={route(url)}
        class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current().startsWith(matchUrl)
            ? 'bg-primary-main/15 hover:bg-primary-main/20'
            : 'hover:bg-secondary-main/5'}"
    >
        {#if children}
            {@render children()}
        {/if}
        <p class="text-sm capitalize">{label}</p>
    </Link>
</div>
