<script lang="ts">
    import { LL, locale } from "$i18n/i18n-svelte";
    import RestaurantStatus from "$lib/RestaurantStatus.svelte";
    import { fade } from "svelte/transition";
    import Searchbar from "./Searchbar.svelte";

    export let data;

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
    {#each data.restaurants as restaurant (String(restaurant.id))}
        <li class="restaurant" aria-label={restaurant.name}>
            <a href="/{$locale}/restaurants/{restaurant.id}/">
                <span>{restaurant.name}</span>
            </a>
            <small aria-label="Heures d'ouverture"
                >{restaurant.open_hour} - {restaurant.close_hour}</small
            >
            <RestaurantStatus {restaurant} let:display let:busy>
                <div
                    class="restaurant__status"
                    aria-busy={busy}
                    class:hide={!display}
                    in:fade
                >
                    {display}
                </div>
            </RestaurantStatus>
        </li>
    {/each}
</ul>

<h2>{$LL.products()}</h2>

<ul class="products">
    {#each data.products as product (product.id)}
        <li aria-label={product.name}>
            {product.name}
        </li>
    {/each}
</ul>

<div class="languages">
    {#each data.languages as language}
        {@const adjusted = language === "en" ? "us" : "fr"}
        <a
            href="/{language}/"
            class="language"
            data-sveltekit-reload
            class:active={$locale === language}
            tabindex={$locale === language ? -1 : undefined}
        >
            {@html localeToFlag(adjusted)}
        </a>
    {/each}
</div>

<style lang="scss">
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .restaurants,
    .products {
        li {
            margin-block: 0.25rem;
        }
        li + li {
            border-top: 1px solid #dedede;
        }
    }

    .restaurants a {
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

    .hide {
        visibility: hidden;
    }
</style>
