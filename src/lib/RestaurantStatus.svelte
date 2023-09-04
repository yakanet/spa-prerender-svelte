<script lang="ts">
    import { browser } from "$app/environment";
    import LL from "$i18n/i18n-svelte";
    import type { Restaurants } from "./client.types";
    import {
        getAffluence,
        getFranceTime,
        isRestaurantOpen,
    } from "./client/restaurants";
    export let restaurant: Restaurants;

    const checkOpened = (restaurant: Restaurants) => {
        return isRestaurantOpen(restaurant, getFranceTime()) ? "OPEN" : "CLOSE";
    };
</script>

{#if browser}
    {@const open = checkOpened(restaurant)}
    {#if open === "CLOSE"}
        <slot display={$LL.close()} />
    {:else}
        {#await getAffluence(restaurant.id)}
            <slot display={$LL.open()} />
        {:then affluence}
            <slot display={affluence + " mn"} />
        {/await}
    {/if}
{:else}
    <slot display={null} />
{/if}
