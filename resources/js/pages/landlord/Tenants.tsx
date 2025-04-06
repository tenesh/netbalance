import LandlordLayout from '@/layouts/LandlordLayout';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

const TenantsPage = () => {
    return (
        <div className="flex items-center justify-between">
            <h5>Tenants</h5>
            <Link
                href={route('landlord.tenants.create')}
                as="button"
                className="bg-primary-main hover:bg-primary-dark self-start px-4 py-2 text-sm text-white"
            >
                Add new
            </Link>
        </div>
    );
};

TenantsPage.layout = (page: ReactNode) => <LandlordLayout children={page} />;

export default TenantsPage;
