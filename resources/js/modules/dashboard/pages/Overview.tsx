import AppLayout from '@/layouts/AppLayout';
import { ReactNode } from 'react';

const OverviewPage = () => {
    return <div className="h-full w-full p-6">Overview page</div>;
};

OverviewPage.layout = (page: ReactNode) => <AppLayout children={page} />;

export default OverviewPage;
