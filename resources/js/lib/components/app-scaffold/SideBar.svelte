<script lang="ts">
    import { clickoutside } from '@svelte-put/clickoutside';
    import type { Snippet } from 'svelte';
    import { UserRound } from '@lucide/svelte';
    import { page } from '@inertiajs/svelte';
    import type { PageProps } from '$lib/types';

    let { isOpen, toggleOpen, children } = $props<{ isOpen: boolean; toggleOpen: () => void; children: Snippet }>();
    let enabled = $derived(isOpen);

    let { auth } = $page.props as PageProps;
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
        <div class="flex items-center gap-2 h-[76px] py-5 mx-4 border-t border-neutral-200">
            {#if auth.user && auth.user.avatar !== null}
                <div class="h-10 w-10 rounded-full">
                    <img src={auth.user.avatar} alt="user" class="w-full h-full object-cover object-center" />
                </div>
            {:else}
                <div class="h-10 w-10 rounded-full flex items-center justify-center bg-neutral-200/50">
                    <UserRound size={22} />
                </div>
            {/if}
            <div class="flex flex-col">
                <p class="text-sm font-medium">{auth.user.first_name} {auth.user.last_name}</p>
                <p class="text-xs">{auth.role.label}</p>
            </div>
        </div>
    </div>
</div>
