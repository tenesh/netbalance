import AppLayout from '@/layouts/AppLayout';
import { Button } from '@heroui/react';
import { router } from '@inertiajs/react';
import type { ReactNode } from 'react';

const ViewTenantsPage = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h5>Tenants page</h5>
                <Button onPress={() => router.visit(route('admin.tenants.create'))} color="primary" size="md">
                    Add new
                </Button>
            </div>
        </>
    );
};

ViewTenantsPage.layout = (page: ReactNode) => <AppLayout children={page} />;

export default ViewTenantsPage;
