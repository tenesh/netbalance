import AppLayout from '@/layouts/AppLayout';
import { Button } from '@heroui/react';
import { router } from '@inertiajs/react';
import type { ReactNode } from 'react';

const ViewTenantPage = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h5>Tenant page</h5>
                <Button onPress={() => router.visit(route('admin.tenants.create'))} color="primary" size="md">
                    Edit
                </Button>
            </div>
        </>
    );
};

ViewTenantPage.layout = (page: ReactNode) => <AppLayout children={page} />;

export default ViewTenantPage;
