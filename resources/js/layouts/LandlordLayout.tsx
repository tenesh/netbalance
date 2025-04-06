import Shell from '@/components/app-scaffold/Shell';
import { SideBar, SideBarMenu, SideBarMenuItem } from '@/components/app-scaffold/SideBar';
import TopBar from '@/components/app-scaffold/TopBar';
import { Building2, Cloud, LayoutDashboard, LogOut, Logs, ReceiptText, Settings, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

const LandlordLayout = ({ children }: { children: ReactNode }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <Shell>
            <SideBar isOpen={sideBarOpen} toggleOpen={() => setSideBarOpen(false)}>
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
                    <SideBarMenuItem
                        url="landlord.import-export"
                        label="import & export"
                        matchUrl="landlord.import-export"
                    >
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
            <div className="flex grow flex-col">
                <TopBar sideBarToggleOpen={() => setSideBarOpen(true)} />
                <div className="m-auto flex h-full w-full max-w-[1440px] flex-col p-6 md:px-10">{children}</div>
            </div>
        </Shell>
    );
};

export default LandlordLayout;
