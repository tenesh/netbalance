import type { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return <main className="flex h-screen w-full">{children}</main>;
};

export default AuthLayout;
