<script lang="ts">
    import { browser } from "$app/environment";
    import { LL, locale, setLocale } from "$i18n/i18n-svelte";
    import type { Restaurants } from "$lib/client.types.js";
    import {
        getAffluence,
        getFranceTime,
        isRestaurantOpen,
    } from "$lib/client/restaurants.js";
    import Searchbar from "./Searchbar.svelte";

    export let data;

    const checkOpened = (restaurant: Restaurants) => {
        return isRestaurantOpen(restaurant, getFranceTime()) ? "OPEN" : "CLOSE";
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
    <title>{$LL.title()}</title>
    <meta name="description" content={$LL.title()} />
</svelte:head>

<h1>[{$locale.toUpperCase()}] {$LL.title()}</h1>
<p>{$LL.hi({ name: "John" })}</p>

<section>
    <Searchbar restaurants={data.restaurants} products={data.products} />
</section>

<h2>{$LL.restaurants()}</h2>
<ul class="restaurants">
    {#each data.restaurants as restaurant}
        <li class="restaurant" aria-label={restaurant.name}>
            <a href="/{$locale}/restaurants/{restaurant.id}">
                <span>{restaurant.name}</span>
            </a>
            <small>{restaurant.open_hour} - {restaurant.close_hour}</small>
            <div class="restaurant__status">
                {#if browser}
                    {@const open = checkOpened(restaurant)}
                    {#if open === "CLOSE"}
                        {$LL.close()}
                    {:else}
                        {#await getAffluence(restaurant.id)}
                            {$LL.open()}
                        {:then affluence}
                            {affluence} mn
                        {/await}
                    {/if}
                {:else}
                    &nbsp;
                {/if}
            </div>
        </li>
    {/each}
</ul>

<h2>{$LL.products()}</h2>

<ul class="products">
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
            tabindex={$locale === language ? -1 : undefined}
        >
            {@html localeToFlag(adjusted)}
        </a>
    {/each}
</div>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .restaurants li + li,
    .products li + li {
        border-top: 1px solid #dedede;
    }

    .restaurants li,
    .products li {
        margin-block: 0.25rem;
    }

    ul a {
        display: inline-block;
        padding-block: 0.5rem;
    }

    small {
        font-size: 0.75rem;
        display: block;
    }

    .restaurant__status {
        text-transform: lowercase;
        border: 1px solid #ccc;
        display: inline-block;
        background-color: #ccc;
    }

    .languages {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }

    .language {
        text-decoration: none;
    }

    .language.active {
        outline: 1px solid #0000cc33;
        outline-offset: 0.25rem;
    }
</style>
