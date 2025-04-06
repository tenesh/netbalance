import TenantLayout from '@/layouts/TenantLayout';
import { ReactNode } from 'react';

const DashboardPage = () => {
    return <div className="h-full w-full p-6">Tenant Dashboard</div>;
};

DashboardPage.layout = (page: ReactNode) => <TenantLayout children={page} />;

export default DashboardPage;
