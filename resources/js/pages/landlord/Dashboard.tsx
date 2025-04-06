import LandlordLayout from '@/layouts/LandlordLayout';
import { ReactNode } from 'react';

const DashboardPage = () => {
    return <div className="h-full w-full p-6">Admin Dashboard</div>;
};

DashboardPage.layout = (page: ReactNode) => <LandlordLayout children={page} />;

export default DashboardPage;
