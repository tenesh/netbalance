import type { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { UserRound } from 'lucide-react';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type SideBarProps = {
    isOpen: boolean;
    toggleOpen: () => void;
    children: ReactNode;
};

type SideBarMenuItemProps = {
    url: string;
    matchUrl: string;
    label: string;
    children: ReactNode;
};

type SideBarMenuProps = {
    title: string;
    children: ReactNode;
};

export const SideBar = ({ isOpen, toggleOpen, children }: SideBarProps) => {
    const ref = useRef(null);

    const handleClickOutside = () => {
        if (!isOpen) return;
        toggleOpen();
    };

    const { auth } = usePage().props as PageProps;

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div
            className={`${isOpen ? 'flex' : 'hidden'} absolute top-0 left-0 h-screen min-w-screen border-r border-neutral-200 bg-neutral-900/20 xl:relative xl:flex xl:min-w-[253px]`}
        >
            <div ref={ref} className="flex min-w-[253px] flex-col bg-white">
                <div className="mx-4 flex h-[76px] items-center border-b border-neutral-200 py-5">
                    <img src="/images/logo.svg" alt="netbalance" className="h-[26px] w-[140px]" />
                </div>
                <div className="w-full grow px-4">{children}</div>
                <div className="mx-4 flex h-[76px] items-center gap-2 border-t border-neutral-200 py-5">
                    {auth.user.avatar !== null ? (
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                            <img
                                src={auth.user.avatar}
                                alt="user"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/50">
                            <UserRound size={22} />
                        </div>
                    )}
                    <div className="flex flex-col">
                        <p className="text-sm font-medium">
                            {auth.user.first_name} {auth.user.last_name}
                        </p>
                        <p className="text-xs">{auth.role.label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SideBarMenuItem = ({ url, matchUrl, label, children }: SideBarMenuItemProps) => {
    const active = route().current()?.startsWith(matchUrl);

    return (
        <div className="my-1">
            <Link
                href={route(url)}
                className={`my-1 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 ${
                    active ? 'bg-primary-main/15 hover:bg-primary-main/20' : 'hover:bg-secondary-main/5'
                }`}
            >
                {children}
                <p className="text-sm capitalize">{label}</p>
            </Link>
        </div>
    );
};

export const SideBarMenu = ({ title, children }: SideBarMenuProps) => {
    return (
        <div className="pt-3">
            <p className="pb-1 text-xs text-neutral-500">{title}</p>
            {children}
        </div>
    );
};
