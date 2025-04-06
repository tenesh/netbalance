<script lang="ts">
    import { Bell, Menu } from '@lucide/svelte';

    let { sideBarToggleOpen } = $props<{ sideBarToggleOpen: boolean }>();
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
            <Menu size={18} />
        </button>
        <div class="ml-auto flex items-center gap-4">
            <button class="p-2 border border-neutral-200 hover:bg-neutral-100">
                <Bell size={18} />
            </button>
        </div>
    </div>
</div>
