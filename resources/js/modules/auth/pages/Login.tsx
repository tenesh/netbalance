import AuthLayout from '@/layouts/AuthLayout';
import type { PageProps } from '@/types';
import { Button, Checkbox, Input } from '@heroui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEvent, ReactNode } from 'react';

const LoginPage = () => {
    const { app } = usePage().props as PageProps;

    const { data, setData, post, processing, errors, clearErrors } = useForm<{
        email: string;
        password: string;
        remember: boolean;
    }>({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <div className="flex h-full w-full flex-col items-center gap-5 p-10 md:p-20">
                <div className="mb-[64px] flex flex-col gap-[12px] text-center">
                    <h1 className="text-3xl">Sign In</h1>
                    <p className="max-w-xl text-center text-sm text-secondary-500">
                        Back in action. Let’s move your business forward.
                    </p>
                </div>
                <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-5">
                    <div className="flex w-full flex-col">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="example@company.com"
                            value={data.email}
                            onValueChange={(value) => {
                                clearErrors('email');
                                setData('email', value);
                            }}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onValueChange={(value) => {
                                clearErrors('password');
                                setData('password', value);
                            }}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password}
                        />
                    </div>
                    <div className="flex w-full items-center justify-between gap-2">
                        <div className="flex gap-2">
                            <Checkbox
                                defaultSelected
                                isSelected={data.remember}
                                onValueChange={() => setData('remember', !data.remember)}
                                size="sm"
                            >
                                Keep me logged in
                            </Checkbox>
                        </div>
                        <Link
                            href={route('password.request')}
                            className="hover:text-primary-dark self-end text-sm text-primary-500"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Button type="submit" disabled={processing} color="primary" size="md" isLoading={processing}>
                        Sign In
                    </Button>
                </form>
                <div className="md:divide-secondary-lighter mt-auto flex w-full max-w-md flex-col gap-2 text-center md:flex-row md:gap-0 md:divide-x">
                    <p className="hover:text-secondary-dark w-full text-sm text-secondary-500">
                        &#169; 2025 netbalance
                    </p>
                    <Link
                        href={app.public_url + '/policy'}
                        className="hover:text-secondary-dark w-full text-sm text-secondary-500"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href={app.public_url + '/terms'}
                        className="hover:text-secondary-dark w-full text-sm text-secondary-500"
                    >
                        Terms & Conditions
                    </Link>
                </div>
            </div>
            <div className="gap-15 hidden h-full w-full flex-col items-center bg-secondary-50 pt-20 lg:flex">
                <div className="mb-10 flex flex-col gap-[12px] px-20 text-center">
                    <h2 className="text-2xl text-primary-500">netbalance</h2>
                    <p className="max-w-xl text-center text-sm text-secondary-500">
                        Streamline operations, optimize inventory, and gain powerful insights—all from one intuitive
                        platform that empowers your business to grow with clarity and control.
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
