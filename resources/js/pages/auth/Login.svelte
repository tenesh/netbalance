<script lang="ts">
    import AuthLayout from '$lib/layouts/AuthLayout.svelte';
    import { route } from 'ziggy-js';
    import { useForm } from '@inertiajs/svelte';

    const form = useForm({
        email: null,
        password: null,
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        $form.post('/login');
    }
</script>

<AuthLayout>
    <div class="flex w-full h-full">
        <div class="flex flex-col w-full h-full items-center p-10 gap-5 md:p-20">
            <div class="flex flex-col text-center gap-[12px] mb-[64px]">
                <h1 class="">Sign In</h1>
                <p class="max-w-xl text-center text-secondary-main body2">
                    Back in action. Let’s move your business forward.
                </p>
            </div>
            <form onsubmit={submit} class="flex flex-col w-full max-w-md gap-5">
                <div class="flex flex-col w-full">
                    <label for="email" class="w-full"> Email </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="example@company.com"
                        bind:value={$form.email}
                    />
                    {#if $form.errors.email}
                        <div class="input-error">
                            <p>{$form.errors.email}</p>
                        </div>
                    {/if}
                </div>
                <div class="flex flex-col w-full">
                    <label for="password" class="w-full"> Password </label>
                    <input
                        class="w-full"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        bind:value={$form.password}
                    />
                    {#if $form.errors.password}
                        <div class="input-error">
                            <p>{$form.errors.password}</p>
                        </div>
                    {/if}
                </div>
                <div class="flex w-full justify-between">
                    <div class="flex gap-2">
                        <input type="checkbox" name="remember" id="remember" bind:checked={$form.remember} />
                        <label for="remember"> Keep me logged in </label>
                    </div>
                    <a
                        href={route('password.request')}
                        class="text-sm text-primary-main hover:text-primary-dark underline self-end mb-1"
                    >
                        Forgot password?
                    </a>
                </div>
                <button
                    class="bg-primary-main text-white hover:bg-primary-dark self-start"
                    type="submit"
                    disabled={$form.processing}
                >
                    Sign In
                </button>
            </form>
            <div
                class="flex flex-col text-center w-full max-w-md mt-auto gap-2 md:gap-0 md:flex-row md:divide-x md:divide-secondary-lighter"
            >
                <p class="text-sm text-secondary-main hover:text-secondary-dark w-full">&#169; 2025 netbalance</p>
                <a href={route('policy')} class="text-sm text-secondary-main hover:text-secondary-dark w-full">
                    Privacy Policy
                </a>
                <a href={route('terms')} class="text-sm text-secondary-main hover:text-secondary-dark w-full">
                    Terms & Conditions
                </a>
            </div>
        </div>
        <div class="hero hidden flex flex-col w-full h-full items-center pt-20 gap-15 lg:flex">
            <div class="flex flex-col text-center px-20 gap-[12px]">
                <h2 class="text-primary-main">netbalance</h2>
                <p class="max-w-xl text-center text-secondary-main body2">
                    Streamline operations, optimize inventory, and gain powerful insights—all from one intuitive
                    platform that empowers your business to grow with clarity and control.
                </p>
            </div>
            <div class="relative w-full h-full px-20 overflow-hidden">
                <div class="hero-image w-full h-full absolute"></div>
            </div>
        </div>
    </div>
</AuthLayout>

<style lang="css">
    .hero {
        background-color: rgb(245, 242, 250);
    }

    .hero-image {
        background-image: url('/images/dashboard-customer.svg');
    }
</style>
