<script lang="ts">
    import { browser } from "$app/environment";
    import { LL, locale } from "$i18n/i18n-svelte";
    import type { Restaurants } from "$lib/client.types.js";
    import { isRestaurantOpen } from "$lib/client/restaurants.js";
    import Searchbar from "./Searchbar.svelte";

    export let data;
    let selectedLanguage = data.language;

    function setLanguage() {
        console.log(selectedLanguage);
        window.location.href = "/" + selectedLanguage;
    }

    const checkOpened = (restaurant: Restaurants) => {
        if (!browser) return null; // Should not prerender this open status
        return isRestaurantOpen(restaurant) ? "OPEN" : "CLOSE";
    };
</script>

<svelte:head>
    <title>Welcome to Sveltekit</title>
    <meta name="description" content="Welcome to Sveltekit" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>
    {$LL.hi({ name: "John" })}
</p>

<Searchbar restaurants={data.restaurants} products={data.products} />

{JSON.stringify($locale)}
<ul>
    {#each data.restaurants as restaurant}
        {@const status = checkOpened(restaurant)}
        <li
            class:opened={status === "OPEN"}
            class:closed={status === "CLOSE"}
            aria-label={restaurant.name}
        >
            <a href="/{selectedLanguage}/restaurants/{restaurant.id}">
                {JSON.stringify(restaurant)}
            </a>
        </li>
    {/each}

    {#each data.products as product}
        <li aria-label={product.name}>
            {JSON.stringify(product)}
        </li>
    {/each}
</ul>

<select bind:value={selectedLanguage} on:change={() => setLanguage()}>
    {#each data.languages as language}
        <option value={language} selected={language === selectedLanguage}
            >{language}</option
        >
    {/each}
</select>

<style>
    h1 {
        color: #aa0000;
        font-size: 1.5rem;
    }

    a {
        display: inline-block;
        padding-block: 0.5rem;
    }

    .opened::after {
        content: "open";
    }

    .closed::after {
        content: "close";
    }

    .opened::after,
    .closed::after {
        border: 1px solid #ccc;
        display: inline-block;
        background-color: #ccc;
    }
</style>
