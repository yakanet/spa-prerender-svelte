<script lang="ts">
    import { browser } from "$app/environment";
    import { LL, locale, setLocale } from "$i18n/i18n-svelte";
    import type { Restaurants } from "$lib/client.types.js";
    import { isRestaurantOpen } from "$lib/client/restaurants.js";
    import type { Locale } from "typesafe-i18n/types/runtime/src/core.mjs";
    import Searchbar from "./Searchbar.svelte";

    export let data;

    const checkOpened = (restaurant: Restaurants) => {
        return isRestaurantOpen(restaurant) ? "open" : "close";
    };

    function localeToFlag(code: string) {
        return code
            .split("")
            .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
            .map((emojiCode) => String.fromCodePoint(emojiCode))
            .join("");
    }
</script>

<svelte:head>
    <title>Welcome to Sveltekit</title>
    <meta name="description" content="Welcome to Sveltekit" />
</svelte:head>

<h1>[{$locale}] Welcome to SvelteKit</h1>
<p>{$LL.hi({ name: "John" })}</p>

<section>
    <Searchbar restaurants={data.restaurants} products={data.products} />
</section>

<ul>
    {#each data.restaurants as restaurant}
        <li class="restaurant" aria-label={restaurant.name}>
            <a href="/{$locale}/restaurants/{restaurant.id}">
                <span>{restaurant.name}</span>
            </a>
            <small>{restaurant.open_hour} - {restaurant.close_hour}</small>
            <div class="restaurant__status">
                {#if browser}
                    {checkOpened(restaurant)}
                {:else}
                    &nbsp;
                {/if}
            </div>
        </li>
    {/each}

    {#each data.products as product}
        <li aria-label={product.name}>
            {product.name}
        </li>
    {/each}
</ul>

<div class="languages">
    {#each data.languages as language}
        {@const adjusted = language === "en" ? "us" : "fr"}
        <a
            href="/{language}"
            class="language"
            data-sveltekit-reload
            class:active={$locale === language}
        >
            {@html localeToFlag(adjusted)}
        </a>
    {/each}
</div>

<style>
    h1 {
        color: #aa0000;
        font-size: 1.5rem;
    }

    a {
        display: inline-block;
        padding-block: 0.5rem;
    }

    small {
        font-size: 0.75rem;
        display: block;
    }

    .restaurant__status {
        border: 1px solid #ccc;
        display: inline-block;
        background-color: #ccc;
    }

    .languages {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }

    .language.active {
        outline: 1px solid #0000cc33;
    }
</style>
