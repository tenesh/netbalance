import Shell from '@/components/scaffolds/Shell';
import { SideBar, SideBarMenu, SideBarMenuItem } from '@/components/scaffolds/SideBar';
import TopBar from '@/components/scaffolds/TopBar';
import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import {
    Building2,
    CloudDownload,
    CloudUpload,
    LayoutDashboard,
    LogOut,
    Logs,
    ReceiptText,
    Settings,
    Users,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const { auth } = usePage().props as PageProps;

    return (
        <Shell class="">
            <SideBar isOpen={sideBarOpen} toggleOpen={() => setSideBarOpen(false)}>
                <SideBarMenu title="manage">
                    <SideBarMenuItem url="dashboard" label="dashboard" matchUrl="dashboard">
                        <LayoutDashboard size={20} />
                    </SideBarMenuItem>
                    {auth.user.is_admin && (
                        <>
                            <SideBarMenuItem url="admin.tenants.index" label="tenants" matchUrl="admin.tenants">
                                <Building2 size={20} />
                            </SideBarMenuItem>
                            <SideBarMenuItem url="admin.users.index" label="users" matchUrl="admin.users">
                                <Users size={20} />
                            </SideBarMenuItem>
                        </>
                    )}
                    {!auth.user.is_admin && (
                        <>
                            <SideBarMenuItem url="tenant.billing.index" label="billing" matchUrl="tenant.billing">
                                <ReceiptText size={20} />
                            </SideBarMenuItem>
                        </>
                    )}
                </SideBarMenu>
                <SideBarMenu title="tools">
                    {auth.user.is_admin && (
                        <>
                            <SideBarMenuItem url="admin.logs.index" label="logs" matchUrl="admin.logs">
                                <Logs size={20} />
                            </SideBarMenuItem>
                        </>
                    )}
                    <SideBarMenuItem url="imports.index" label="import data" matchUrl="imports">
                        <CloudUpload size={20} />
                    </SideBarMenuItem>
                    <SideBarMenuItem url="exports.index" label="export data" matchUrl="exports">
                        <CloudDownload size={20} />
                    </SideBarMenuItem>
                </SideBarMenu>
                <SideBarMenu title="account">
                    <SideBarMenuItem url="settings.index" label="settings" matchUrl="settings">
                        <Settings size={20} />
                    </SideBarMenuItem>
                    <SideBarMenuItem url="logout" label="logout" matchUrl="logout">
                        <LogOut size={20} />
                    </SideBarMenuItem>
                </SideBarMenu>
            </SideBar>
            <div className="relative flex h-screen w-full flex-col overflow-y-auto">
                <TopBar sideBarToggleOpen={() => setSideBarOpen(true)} />
                <div className="mx-auto flex w-full max-w-[1440px] flex-col p-10 md:px-10">{children}</div>
            </div>
        </Shell>
    );
};

export default AppLayout;
