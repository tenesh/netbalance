import LandlordLayout from '@/layouts/LandlordLayout';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { useForm } from '@inertiajs/react';
import { getAllCountries, getTimezonesForCountry } from 'countries-and-timezones';
import { ChevronLeft } from 'lucide-react';
import { FormEvent, ReactNode } from 'react';

const TenantPage = () => {
    const { data, setData, post, processing, errors, clearErrors } = useForm<{
        name: string;
        slug: string;
        email: string;
        phone: string;
        avatar: string;
        street_name_one: string;
        street_name_two: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
        timezone: string;
        is_active: boolean;
    }>({
        name: '',
        slug: '',
        email: '',
        phone: '',
        avatar: '',
        street_name_one: '',
        street_name_two: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        timezone: '',
        is_active: true,
    });

    console.log(data.country);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/create');
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
                    <p className="col-span-full mt-6 w-full font-medium">Basic</p>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Name"
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
                    <p className="col-span-full mt-6 w-full font-medium">Address</p>
                    <div className="col-span-full lg:col-span-2">
                        <Input
                            label="Street Name 1"
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
                    <p className="col-span-full mt-6 w-full font-medium">Locale</p>
                    <div className="col-span-full lg:col-span-2">
                        <Select
                            label="Timezone"
                            defaultSelectedKeys={new Set([data.timezone])}
                            onSelectionChange={(value) => {
                                clearErrors('timezone');
                                setData('timezone', value.currentKey);
                            }}
                        >
                            {data.country &&
                                Object.entries(getTimezonesForCountry(data.country))
                                    .sort(([, a], [, b]) => a.name.localeCompare(b.name))
                                    .map(([code, timezone]) => (
                                        <SelectItem key={timezone.name}>{timezone.name}</SelectItem>
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

TenantPage.layout = (page: ReactNode) => <LandlordLayout children={page} />;
export default TenantPage;
