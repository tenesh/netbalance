import { Bell, Menu } from 'lucide-react';

const TopBar = ({ sideBarToggleOpen }: { sideBarToggleOpen: () => void }) => {
    return (
        <div className="flex min-h-[76px] flex-col items-center justify-between border-b border-neutral-200 px-6 xl:flex-row">
            <div className="flex h-full w-full items-center justify-between">
                <button
                    className="block border border-neutral-200 p-2 hover:bg-neutral-100 xl:hidden"
                    onClick={(e) => {
                        sideBarToggleOpen();
                    }}
                >
                    <Menu size={18} />
                </button>
                <div className="ml-auto flex items-center gap-4">
                    <button className="border border-neutral-200 p-2 hover:bg-neutral-100">
                        <Bell size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
