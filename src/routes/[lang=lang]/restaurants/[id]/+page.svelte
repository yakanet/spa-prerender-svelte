<script lang="ts">
    import { locale } from "$i18n/i18n-svelte.js";
    import TimeRange from "$lib/TimeRange.svelte";

    export let data;
</script>

<svelte:head>
    <title>{data.restaurant.name}</title>
    <meta name="description" content={data.restaurant.name} />
</svelte:head>

<h1>{data.restaurant.name}</h1>

<TimeRange
    open={data.restaurant.open_hour ?? null}
    close={data.restaurant.close_hour ?? null}
/>

<pre style="overflow-y: auto;">{JSON.stringify(data.restaurant, null, 2)}</pre>

<a href="/{$locale}/">Back</a>
