<script lang="ts">
    let { children } = $props();
</script>

<main class="flex flex-col w-full h-full">
    {@render children()}
</main>
