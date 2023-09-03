<script lang="ts">
    export let data;
</script>

<h1>{data.restaurant.name}</h1>

<pre>{JSON.stringify(data.restaurant, null, 2)}</pre>

<a href="/">Back</a>