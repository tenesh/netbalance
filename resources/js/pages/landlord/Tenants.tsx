import LandlordLayout from '@/layouts/LandlordLayout';
import { Button } from '@heroui/react';
import { router } from '@inertiajs/react';
import type { ReactNode } from 'react';

const TenantsPage = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h5>Tenants</h5>
                <Button onClick={() => router.visit(route('landlord.tenants.create'))} color="primary" size="md">
                    Add new
                </Button>
            </div>
        </>
    );
};

TenantsPage.layout = (page: ReactNode) => <LandlordLayout children={page} />;

export default TenantsPage;
