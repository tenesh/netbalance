<script lang="ts">
    import AppShell from '$lib/components/AppShell.svelte';
    import AppSideBar from '$lib/components/AppSideBar.svelte';
    import AppTopBar from '$lib/components/AppTopBar.svelte';
    import { LayoutDashboard, Users, Settings, Building2, ReceiptText, Logs, Cloud, LogOut } from 'lucide-svelte';
    import { Link } from '@inertiajs/svelte';

    let { children } = $props();
    let sidebarOpen = $state(false);
</script>

<AppShell>
    <AppSideBar isOpen={sidebarOpen} toggleOpen={() => (sidebarOpen = false)}>
        <div class="pt-3">
            <p class="text-xs text-neutral-500 pb-1">Manage</p>
            <Link
                href={route('admin.dashboard')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.dashboard'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <LayoutDashboard size={20} />
                <p class="text-sm">Dashboard</p>
            </Link>
            <Link
                href={route('admin.tenants')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.tenants'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <Building2 size={20} />
                <p class="text-sm">Tenants</p>
            </Link>
            <Link
                href={route('admin.users')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.users'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <Users size={20} />
                <p class="text-sm">Users</p>
            </Link>
            <Link
                href={route('admin.billing')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.billing'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <ReceiptText size={20} />
                <p class="text-sm">Billing</p>
            </Link>
        </div>
        <div class="pt-3">
            <p class="text-xs text-neutral-500 pb-1">Tools</p>
            <Link
                href={route('admin.logs')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.logs'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <Logs size={20} />
                <p class="text-sm">Logs</p>
            </Link>
            <Link
                href={route('admin.import-export')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.import-export'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <Cloud size={20} />
                <p class="text-sm">Import & Export</p>
            </Link>
        </div>
        <div class="pt-3">
            <p class="text-xs text-neutral-500 pb-1">Account</p>
            <Link
                href={route('admin.settings')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.settings'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-secondary-main/5'}"
            >
                <Settings size={20} />
                <p class="text-sm">Settings</p>
            </Link>
            <Link
                href={route('admin.logout')}
                class="cursor-pointer flex items-center gap-2 my-1 py-2.5 px-2 rounded-lg {route().current() ===
                'admin.logout'
                    ? 'bg-primary-main/15 hover:bg-primary-main/20'
                    : 'hover:bg-error-main/15'}"
            >
                <LogOut size={20} />
                <p class="text-sm">Logout</p>
            </Link>
        </div>
    </AppSideBar>
    <div class="grow flex flex-col">
        <AppTopBar sideBarToggleOpen={() => (sidebarOpen = true)} />
        {#if children}
            {@render children()}
        {/if}
    </div>
</AppShell>
