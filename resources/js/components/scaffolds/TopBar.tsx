import { Badge, Button } from '@heroui/react';
import { Bell, Menu } from 'lucide-react';

const TopBar = ({ sideBarToggleOpen }: { sideBarToggleOpen: () => void }) => {
    return (
        <div className="sticky top-0 z-40 flex min-h-[76px] w-full flex-col items-center justify-between border-b border-neutral-200 bg-white px-6 xl:flex-row">
            <div className="flex h-full w-full items-center justify-between">
                <Button onPress={sideBarToggleOpen} size="md" variant="ghost" isIconOnly className="xl:hidden">
                    <Menu size={18} />
                </Button>
                <div className="ml-auto flex items-center gap-4">
                    <Badge color="primary" content={5} shape="circle" size="lg">
                        <Button size="md" variant="ghost" isIconOnly>
                            <Bell size={18} />
                        </Button>
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
