import { Shell } from '@/components/scaffolds/app/Shell';
import { SideBar } from '@/components/scaffolds/app/SideBar';
import { TopBar } from '@/components/scaffolds/app/TopBar';
import type { ReactNode } from 'react';
import { useState } from 'react';

const TenantLayout = ({ children }: { children: ReactNode }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <Shell>
            <SideBar isOpen={sideBarOpen} toggleOpen={() => setSideBarOpen(false)}></SideBar>
            <div className="flex grow flex-col">
                <TopBar sideBarToggleOpen={() => setSideBarOpen(true)} />
                <div className="m-auto flex h-full w-full max-w-[1440px] flex-col px-4 py-6 md:px-10">{children}</div>
            </div>
        </Shell>
    );
};

export default TenantLayout;
