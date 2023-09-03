<script lang="ts">
    import { LL } from "$i18n/i18n-svelte";
    import type { Produits, Restaurants } from "$lib/client.types";
    import Fuse from "fuse.js";
    import { createCombobox, melt } from "@melt-ui/svelte";
    import { goto } from "$app/navigation";

    export let restaurants: Restaurants[];
    export let products: Produits[];

    type UnFuse<T> = T extends Fuse<infer K> ? K : never;

    type IndexType = "restaurant" | "product";
    const index = new Fuse(
        [
            ...restaurants.map((r) => ({
                ...r,
                type: "restaurant" satisfies IndexType as IndexType,
            })),
            ...products.map((p) => ({
                ...p,
                type: "product" satisfies IndexType as IndexType,
            })),
        ],
        {
            includeMatches: true,
            keys: ["name"],
        }
    );

    const {
        elements: { menu, input, option, label },
        states: { open },
    } = createCombobox<UnFuse<typeof index>>({
        forceVisible: false,
        closeOnEscape: true,
        closeOnOutsideClick: true,
        onSelectedChange: ({ curr, next }) => {
            if (next?.value?.type === "restaurant") {
                goto("./restaurants/" + next.value.id);
            }
            return next;
        },
    });

    $: searchResult = index.search($input.value, {
        limit: 5,
    });
</script>

<div>
    <label use:melt={$label} for="search">{$LL.search()}</label>
    <input autocomplete="off" type="search" id="search" use:melt={$input} />
</div>
<ul class="search-result" use:melt={$menu}>
    {#if open}
        {#each searchResult as result}
            <li
                use:melt={$option({
                    value: result.item,
                    label: result.item.name ?? "",
                    disabled: false,
                })}
            >
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
    {/if}
</ul>

<style>
    .search-result:empty {
        display: none;
    }

    .search-result {
        border: 1px solid #dedede;
        background: white;
        padding: 0.25em;
        box-shadow: 1px 1px 4px 1px #dedede;
        margin: 0;
    }

    .search-result li {
        display: flex;
        gap: 1rem;
        padding: 0.5em;
    }

    .avatar {
        width: 24px;
        height: 24px;
        align-self: center;
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

    :global([data-highlighted]) {
        background-color: #0000cc33;
    }
</style>
