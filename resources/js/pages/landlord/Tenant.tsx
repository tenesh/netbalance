import LandlordLayout from '@/layouts/LandlordLayout';
import { useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

const TenantPage = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        email: '',
        phone: '',
        avatar: '',
        country: '',
        timezone: '',
        locale: '',
        is_active: true,
    });

    function submit(e: Event) {
        e.preventDefault();
        post('/create');
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 border border-neutral-200 p-2 hover:bg-neutral-100"
                >
                    <ArrowLeft size={16} />
                </button>
                <h5>Create a new tenant</h5>
            </div>
            <div className="mt-10 flex w-full gap-4 rounded-lg p-4 shadow-sm md:p-10">
                <form onSubmit={submit} className="grid w-full grid-cols-4 gap-6">
                    <p className="col-span-full mb-4 w-full font-medium">Basic Information</p>
                    <div className="col-span-full flex flex-col lg:col-span-2">
                        <label htmlFor="name" className="w-full">
                            {' '}
                            Name{' '}
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder=""
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && (
                            <div className="input-error">
                                <p>{errors.name}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-full flex flex-col lg:col-span-2">
                        <label htmlFor="slug" className="w-full">
                            {' '}
                            Slug{' '}
                        </label>
                        <input
                            type="text"
                            name="slug"
                            id="slug"
                            placeholder=""
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                        />
                        {errors.slug && (
                            <div className="input-error">
                                <p>{errors.slug}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-full flex flex-col lg:col-span-2">
                        <label htmlFor="email" className="w-full">
                            {' '}
                            Email{' '}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=""
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        {errors.email && (
                            <div className="input-error">
                                <p>{errors.email}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-full flex flex-col lg:col-span-2">
                        <label htmlFor="phone" className="w-full">
                            {' '}
                            Phone{' '}
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder=""
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                        />
                        {errors.phone && (
                            <div className="input-error">
                                <p>{errors.phone}</p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

TenantPage.layout = (page: ReactNode) => <LandlordLayout children={page} />;
export default TenantPage;
