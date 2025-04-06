<script lang="ts">
    import Layout from '@/modules/landlord/layouts/Layout.svelte';
    import { ArrowLeft } from '@lucide/svelte';
    import { useForm } from '@inertiajs/svelte';
    import { getAllCountries } from 'countries-and-timezones';

    console.log(getAllCountries());

    const form = useForm({
        name: null,
        slug: null,
        email: null,
        phone: null,
        avatar: null,
        country: null,
        timezone: null,
        locale: null,
        is_active: true,
    });

    function submit(e) {
        e.preventDefault();
        $form.post('/login');
    }
</script>

<Layout>
    <div class="flex gap-4 items-center">
        <button
            onclick={() => window.history.back()}
            class="flex gap-2 items-center p-2 border border-neutral-200 hover:bg-neutral-100"
        >
            <ArrowLeft size={16} />
        </button>
        <h5>Create a new tenant</h5>
    </div>
    <div class="flex gap-4 w-full mt-10 p-4 shadow-sm rounded-lg md:p-10">
        <form onsubmit={submit} class="grid grid-cols-4 w-full gap-6">
            <p class="font-medium w-full col-span-full mb-4">Basic Information</p>
            <div class="flex flex-col col-span-full lg:col-span-2">
                <label for="name" class="w-full"> Name </label>
                <input type="text" name="name" id="name" placeholder="" bind:value={$form.name} />
                {#if $form.errors.name}
                    <div class="input-error">
                        <p>{$form.errors.name}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col col-span-full lg:col-span-2">
                <label for="slug" class="w-full"> Slug </label>
                <input type="text" name="slug" id="slug" placeholder="" bind:value={$form.slug} />
                {#if $form.errors.slug}
                    <div class="input-error">
                        <p>{$form.errors.slug}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col col-span-full lg:col-span-2">
                <label for="email" class="w-full"> Email </label>
                <input type="email" name="email" id="email" placeholder="" bind:value={$form.email} />
                {#if $form.errors.email}
                    <div class="input-error">
                        <p>{$form.errors.email}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col col-span-full lg:col-span-2">
                <label for="phone" class="w-full"> Phone </label>
                <input type="text" name="phone" id="phone" placeholder="" bind:value={$form.phone} />
                {#if $form.errors.phone}
                    <div class="input-error">
                        <p>{$form.errors.phone}</p>
                    </div>
                {/if}
            </div>
        </form>
    </div>
</Layout>
