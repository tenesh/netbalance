import AuthLayout from '@/layouts/AuthLayout';
import { useForm } from '@inertiajs/react';
import { ReactNode } from 'react';

const LoginPage = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function submit(e: Event) {
        e.preventDefault();
        post('/login');
    }

    return (
        <>
            <div className="flex h-full w-full flex-col items-center gap-5 p-10 md:p-20">
                <div className="mb-[64px] flex flex-col gap-[12px] text-center">
                    <h1 className="">Sign In</h1>
                    <p className="text-secondary-main body2 max-w-xl text-center">
                        Back in action. Let’s move your business forward.
                    </p>
                </div>
                <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-5">
                    <div className="flex w-full flex-col">
                        <label htmlFor="email" className="w-full">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="example@company.com"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        {errors.email && (
                            <div className="input-error">
                                <p>{errors.email}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex w-full flex-col">
                        <label htmlFor="password" className="w-full">
                            Password
                        </label>
                        <input
                            className="w-full"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        {errors.password && (
                            <div className="input-error">
                                <p>{errors.password}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <label htmlFor="remember"> Keep me logged in </label>
                        </div>
                        <a
                            href={route('password.request')}
                            className="text-primary-main hover:text-primary-dark mb-1 self-end text-sm underline"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button
                        className="bg-primary-main hover:bg-primary-dark min-w-[120px] self-start px-3 py-1.5 text-white"
                        type="submit"
                        disabled={processing}
                    >
                        Sign In
                    </button>
                </form>
                <div className="md:divide-secondary-lighter mt-auto flex w-full max-w-md flex-col gap-2 text-center md:flex-row md:gap-0 md:divide-x">
                    <p className="text-secondary-main hover:text-secondary-dark w-full text-sm">
                        &#169; 2025 netbalance
                    </p>
                    <a href={route('policy')} className="text-secondary-main hover:text-secondary-dark w-full text-sm">
                        Privacy Policy
                    </a>
                    <a href={route('terms')} className="text-secondary-main hover:text-secondary-dark w-full text-sm">
                        Terms & Conditions
                    </a>
                </div>
            </div>
            <div className="hidden h-full w-full flex-col items-center gap-15 bg-[#f5f2fa] pt-20 lg:flex">
                <div className="flex flex-col gap-[12px] px-20 text-center">
                    <h2 className="text-primary-main">netbalance</h2>
                    <p className="text-secondary-main body2 max-w-xl text-center">
                        Streamline operations, optimize inventory, and gain powerful insights—all from one intuitive
                        plathtmlForm that empowers your business to grow with clarity and control.
                    </p>
                </div>
                <div className="relative h-full w-full overflow-hidden px-20">
                    <div className="absolute h-full w-full rounded-lg bg-[url(/images/dashboard-customer.svg)]"></div>
                </div>
            </div>
        </>
    );
};

LoginPage.layout = (page: ReactNode) => <AuthLayout children={page} />;

export default LoginPage;
