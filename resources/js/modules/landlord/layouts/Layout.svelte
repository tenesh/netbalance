<script lang="ts">
    import Shell from '$lib/components/app-scaffold/Shell.svelte';
    import SideBar from '$lib/components/app-scaffold/SideBar.svelte';
    import SideBarMenu from '$lib/components/app-scaffold/SideBarMenu.svelte';
    import SideBarMenuItem from '$lib/components/app-scaffold/SideBarMenuItem.svelte';
    import TopBar from '$lib/components/app-scaffold/TopBar.svelte';
    import { LayoutDashboard, Users, Settings, Building2, ReceiptText, Logs, Cloud, LogOut } from '@lucide/svelte';

    let { children } = $props();
    let sidebarOpen = $state(false);
</script>

<Shell>
    <SideBar isOpen={sidebarOpen} toggleOpen={() => (sidebarOpen = false)}>
        <SideBarMenu title="manage">
            <SideBarMenuItem url="landlord.dashboard" label="dashboard" matchUrl="landlord.dashboard">
                <LayoutDashboard size={20} />
            </SideBarMenuItem>
            <SideBarMenuItem url="landlord.tenants.index" label="tenants" matchUrl="landlord.tenants">
                <Building2 size={20} />
            </SideBarMenuItem>
            <SideBarMenuItem url="landlord.users" label="users" matchUrl="landlord.users">
                <Users size={20} />
            </SideBarMenuItem>
            <SideBarMenuItem url="landlord.billing" label="billing" matchUrl="landlord.billing">
                <ReceiptText size={20} />
            </SideBarMenuItem>
        </SideBarMenu>
        <SideBarMenu title="tools">
            <SideBarMenuItem url="landlord.logs" label="tools" matchUrl="landlord.tools">
                <Logs size={20} />
            </SideBarMenuItem>
            <SideBarMenuItem url="landlord.import-export" label="import & export" matchUrl="landlord.import-export">
                <Cloud size={20} />
            </SideBarMenuItem>
        </SideBarMenu>
        <SideBarMenu title="account">
            <SideBarMenuItem url="landlord.settings" label="settings" matchUrl="landlord.settings">
                <Settings size={20} />
            </SideBarMenuItem>
            <SideBarMenuItem url="landlord.logout" label="logout" matchUrl="landlord.logout">
                <LogOut size={20} />
            </SideBarMenuItem>
        </SideBarMenu>
    </SideBar>
    <div class="grow flex flex-col">
        <TopBar sideBarToggleOpen={() => (sidebarOpen = true)} />
        <div class="flex flex-col w-full max-w-[1440px] m-auto h-full py-6 px-4 md:px-10">
            {#if children}
                {@render children()}
            {/if}
        </div>
    </div>
</Shell>
