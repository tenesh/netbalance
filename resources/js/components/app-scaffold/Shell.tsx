import type { ReactNode } from 'react';

const Shell = ({ children }: { children: ReactNode }) => {
    return <main className="flex">{children}</main>;
};

export default Shell;
