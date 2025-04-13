import { FileInput } from '@/components/elements/FileInput';
import AppLayout from '@/layouts/AppLayout';
import type { Plan } from '@/modules/types/plan';
import type { PageProps } from '@/types';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
import { getAllCountries, getTimezonesForCountry } from 'countries-and-timezones';
import { ChevronLeft } from 'lucide-react';
import { FormEvent, ReactNode } from 'react';

const AddTenantPage = () => {
    const { plans } = usePage().props as PageProps<{
        plans: Plan[];
    }>;

    const { data, setData, post, processing, errors, clearErrors } = useForm<{
        name: string;
        slug: string;
        email: string;
        phone: string;
        logo: string;
        street_name_one: string;
        street_name_two: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
        timezone: string;
        is_active: boolean;
        plan: string;
    }>({
        name: '',
        slug: '',
        email: '',
        phone: '',
        logo: '',
        street_name_one: '',
        street_name_two: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        timezone: '',
        is_active: true,
        plan: '',
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('admin.tenants.store'));
    };

    return (
        <>
            <div className="flex items-center gap-4">
                <Button isIconOnly size="md" onPress={() => window.history.back()}>
                    <ChevronLeft size={18} />
                </Button>
                <h5 className="text-xl">Create a new tenant</h5>
            </div>
            <div className="mt-14 flex w-full gap-4 rounded-lg">
                <form onSubmit={submit} className="grid w-full grid-cols-4 gap-6">
                    <p className="col-span-full mt-6 w-full border-b border-b-neutral-200 pb-2 font-medium">Basic</p>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Name"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.name}
                            onValueChange={(value) => {
                                clearErrors('name');
                                setData('name', value);
                            }}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Slug"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.slug}
                            onValueChange={(value) => {
                                clearErrors('slug');
                                setData('slug', value);
                            }}
                            isInvalid={!!errors.slug}
                            errorMessage={errors.slug}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Email"
                            labelPlacement="outside"
                            placeholder=" "
                            type="email"
                            value={data.email}
                            onValueChange={(value) => {
                                clearErrors('email');
                                setData('email', value);
                            }}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Phone"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.phone}
                            onValueChange={(value) => {
                                clearErrors('phone');
                                setData('phone', value);
                            }}
                            isInvalid={!!errors.phone}
                            errorMessage={errors.phone}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <FileInput
                            label="Logo"
                            fileTypes="image/jpeg,image/png"
                            onFileChange={(file) => {
                                console.log(file);
                                clearErrors('logo');
                                if (file) {
                                    setData('logo', file);
                                }
                            }}
                            description="Allowed *.jpeg, *.jpg, *.png max size of 3 Mb"
                            error={errors.logo}
                        />
                    </div>
                    <p className="col-span-full mt-6 w-full border-b border-b-neutral-200 pb-2 font-medium">Address</p>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Street Name 1"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.street_name_one}
                            onValueChange={(value) => {
                                clearErrors('street_name_one');
                                setData('street_name_one', value);
                            }}
                            isInvalid={!!errors.street_name_one}
                            errorMessage={errors.street_name_one}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Street Name 2"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.street_name_two}
                            onValueChange={(value) => {
                                clearErrors('street_name_two');
                                setData('street_name_two', value);
                            }}
                            isInvalid={!!errors.street_name_two}
                            errorMessage={errors.street_name_two}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="City"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.city}
                            onValueChange={(value) => {
                                clearErrors('city');
                                setData('city', value);
                            }}
                            isInvalid={!!errors.city}
                            errorMessage={errors.city}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="State"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.state}
                            onValueChange={(value) => {
                                clearErrors('state');
                                setData('state', value);
                            }}
                            isInvalid={!!errors.state}
                            errorMessage={errors.state}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Postal Code"
                            labelPlacement="outside"
                            placeholder=" "
                            type="text"
                            value={data.postal_code}
                            onValueChange={(value) => {
                                clearErrors('postal_code');
                                setData('postal_code', value);
                            }}
                            isInvalid={!!errors.postal_code}
                            errorMessage={errors.postal_code}
                        />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <Select
                            label="Country"
                            labelPlacement="outside"
                            placeholder="Select one"
                            defaultSelectedKeys={new Set([data.country])}
                            onChange={(e) => {
                                clearErrors('country');
                                setData('country', e.target.value);
                            }}
                        >
                            {Object.entries(getAllCountries())
                                .sort(([, a], [, b]) => a.name.localeCompare(b.name))
                                .map(([_, country]) => (
                                    <SelectItem key={country.id}>{country.name}</SelectItem>
                                ))}
                        </Select>
                    </div>
                    <p className="col-span-full mt-6 w-full border-b border-b-neutral-200 pb-2 font-medium">Locale</p>
                    <div className="col-span-full lg:col-span-2">
                        <Select
                            label="Timezone"
                            labelPlacement="outside"
                            placeholder="Select one"
                            defaultSelectedKeys={new Set([data.timezone])}
                            onSelectionChange={(value) => {
                                clearErrors('timezone');
                                setData('timezone', value.currentKey);
                            }}
                        >
                            {data.country &&
                                Object.entries(getTimezonesForCountry(data.country))
                                    .sort(([, a], [, b]) => a.name.localeCompare(b.name))
                                    .map(([_, timezone]) => (
                                        <SelectItem key={timezone.name}>{timezone.name}</SelectItem>
                                    ))}
                        </Select>
                    </div>
                    <p className="col-span-full mt-6 w-full border-b border-b-neutral-200 pb-2 font-medium">
                        Subscriptions
                    </p>
                    <div className="col-span-full lg:col-span-2">
                        <Select
                            label="Plan"
                            labelPlacement="outside"
                            placeholder="Select one"
                            defaultSelectedKeys={new Set([data.plan])}
                            onSelectionChange={(value) => {
                                clearErrors('plan');
                                setData('plan', value.currentKey);
                            }}
                        >
                            {plans &&
                                Object.entries(plans).map(([_, plan]) => (
                                    <SelectItem key={plan.id}>{plan.name}</SelectItem>
                                ))}
                        </Select>
                    </div>
                    <div className="col-span-full flex justify-end">
                        <Button type="submit" disabled={processing} color="primary" isLoading={processing}>
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

AddTenantPage.layout = (page: ReactNode) => <AppLayout children={page} />;
export default AddTenantPage;
