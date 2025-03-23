<script lang="ts">
    let { children } = $props();
</script>

<main>
    <header></header>
    <article>
        maple
        {@render children()}
    </article>
</main>
