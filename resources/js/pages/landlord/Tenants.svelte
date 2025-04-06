<script lang="ts">
    import Layout from '@/modules/landlord/layouts/Layout.svelte';
    import { Link } from '@inertiajs/svelte';
</script>

<Layout>
    <div class="flex justify-between items-center">
        <h5>Tenants</h5>
        <Link
            href={route('landlord.tenants.create')}
            as="button"
            class="bg-primary-main text-white text-sm hover:bg-primary-dark self-start px-4 py-2"
        >
            Add new
        </Link>
    </div>
</Layout>
