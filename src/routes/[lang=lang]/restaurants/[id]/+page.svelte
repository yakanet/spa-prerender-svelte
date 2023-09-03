<script lang="ts">
    import { locale } from "$i18n/i18n-svelte.js";

    export let data;
</script>

<h1>{data.restaurant.name}</h1>

<pre>{JSON.stringify(data.restaurant, null, 2)}</pre>

<a href="/{$locale}">Back</a>
