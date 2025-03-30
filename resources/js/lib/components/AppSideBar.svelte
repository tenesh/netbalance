<script lang="ts">
    import { clickoutside } from '@svelte-put/clickoutside';
    import type { Snippet } from 'svelte';

    let { isOpen, toggleOpen, children } = $props<{ isOpen: boolean; toggleOpen: () => void; children: Snippet }>();
    let enabled = $derived(isOpen);
</script>

<div
    id="app-sidebar"
    class="{isOpen
        ? 'flex'
        : 'hidden'} absolute top-0 left-0 min-w-screen h-screen bg-neutral-900/20 border-r border-neutral-200 xl:min-w-[253px] xl:relative xl:flex"
>
    <div class="flex flex-col bg-white min-w-[253px]" use:clickoutside={{ enabled }} onclickoutside={toggleOpen}>
        <div class="flex items-center h-[76px] py-5 mx-4 border-b border-neutral-200">
            <img src="/images/logo.svg" alt="netbalance" class="w-[140px] h-[26px]" />
        </div>
        <div class="w-full grow px-4">
            {#if children}
                {@render children()}
            {/if}
        </div>
    </div>
</div>
