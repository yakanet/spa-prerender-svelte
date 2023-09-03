<script lang="ts">
    import { browser } from "$app/environment";
    import { LL, locale } from "$i18n/i18n-svelte";
    import type { Restaurants } from "$lib/client.types.js";
    import { isRestaurantOpen } from "$lib/client/restaurants.js";
    import Fuse from "fuse.js";

    export let data;
    let selectedLanguage = data.language;

    let searchTerm = "";
    $: searchResult = index.search(searchTerm);
    
    type IndexType = "restaurant" | "product";
    const index = new Fuse(
        [
            ...data.restaurants.map((r) => ({
                ...r,
                type: "restaurant" satisfies IndexType as IndexType,
            })),
            ...data.products.map((p) => ({
                ...p,
                type: "product" satisfies IndexType as IndexType,
            })),
        ],
        {
            includeMatches: true,
            keys: ["name"],
        }
    );

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

<div>
    <label for="search">{$LL.search()}</label>
    <input autocomplete="off" type="search" id="search" bind:value={searchTerm} />
</div>
<ul class="search-result">
    {#each searchResult as result}
        <li>
            {#if result.item.type === "restaurant"}
                <span class="avatar restaurant">R</span>
            {:else if result.item.type === "product"}
                <span class="avatar product">P</span>
            {/if}
            <div style="display: flex; flex-wrap: nowrap">
                {result.item.name}
            </div>
        </li>
    {/each}
</ul>

{JSON.stringify($locale)}
<ul>
    {#each data.restaurants as restaurant}
        {@const status = checkOpened(restaurant)}
        <li class:opened={status === 'OPEN'} class:closed={status === 'CLOSE'}>
            <a href="/{selectedLanguage}/restaurants/{restaurant.id}">
                {JSON.stringify(restaurant)}
            </a>
        </li>
    {/each}

    {#each data.products as product}
        <li>
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

    .search-result:empty {
        display: none;
    }

    .search-result {
        border: 1px solid #dedede;
        width: 100%;
        position: absolute;
        background: white;
        padding: 0.25em;
        box-shadow: 1px 1px 4px 1px #dedede;
        margin: 0;
        max-width: 80%;
    }

    .search-result li {
        display: flex;
        gap: 1rem;
        padding: 0.5em;
    }

    .avatar {
        width: 24px;
        aspect-ratio: 1;
        background-color: green;
        border-color: lightgreen;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        font-weight: bold;
    }

    .avatar.restaurant {
        background-color: purple;
    }
</style>
