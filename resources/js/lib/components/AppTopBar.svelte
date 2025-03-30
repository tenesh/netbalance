<script lang="ts">
    import { page } from '@inertiajs/svelte';
    import type { PageProps } from '$lib/types';
    import { Bell, Menu } from 'lucide-svelte';

    let { sideBarToggleOpen } = $props();
    let { user } = $page.props as PageProps;
</script>

<div class="flex flex-col min-h-[76px] justify-between border-b border-neutral-200 items-center px-6 xl:flex-row">
    <div class="w-full h-full flex justify-between items-center">
        <button
            class="block xl:hidden p-2 border border-neutral-200 hover:bg-neutral-100"
            onclick={(e) => {
                e.stopPropagation();
                sideBarToggleOpen();
            }}
        >
            <Menu size={20} />
        </button>
        <div class="ml-auto flex items-center gap-4">
            <button class="p-2 border border-neutral-200 hover:bg-neutral-100">
                <Bell size={16} />
            </button>
            <div class="flex gap-1 items-center">
                {#if user.avatar && user.avatar !== ''}
                    <div class="h-8 w-8 rounded-full hidden sm:block">
                        <img
                            src="/images/profile-placeholder.png"
                            alt="user"
                            class="w-full h-full object-cover object-center"
                        />
                    </div>
                {/if}
                <div class="flex flex-col">
                    <p class="text-sm font-medium">{user.first_name} {user.last_name}</p>
                    <p class="text-xs">{user.role}</p>
                </div>
            </div>
        </div>
    </div>
</div>
