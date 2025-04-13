import type { PageProps } from '@/types';
import { User } from '@heroui/react';
import { Link, usePage } from '@inertiajs/react';
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
            className={`${isOpen ? 'flex' : 'hidden'} min-w-screen absolute left-0 top-0 z-50 h-screen border-r border-neutral-200 bg-neutral-900/20 xl:relative xl:flex`}
        >
            <div ref={ref} className="flex min-w-[253px] flex-col bg-white">
                <div className="mx-4 flex h-[76px] items-center border-b border-neutral-200 py-5">
                    <img src="/images/logo.svg" alt="netbalance" className="h-[26px] w-[140px]" />
                </div>
                <div className="w-full grow overflow-y-auto px-4">{children}</div>
                <div className="mx-4 flex h-[76px] items-center gap-2 border-t border-neutral-200 py-5">
                    <User
                        avatarProps={{
                            src: `${auth.user.avatar}`,
                        }}
                        description={auth.role.label}
                        name={auth.user.first_name + ' ' + auth.user.last_name}
                    />
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
                    active ? 'bg-primary-500/15 hover:bg-primary-500/20' : 'hover:bg-secondary-500/5'
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
            <p className="pb-1 text-xs capitalize text-neutral-500">{title}</p>
            {children}
        </div>
    );
};
