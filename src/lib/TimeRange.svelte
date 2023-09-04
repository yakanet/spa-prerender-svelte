<script lang="ts">
    import { getFranceTime, isRestaurantOpen } from "./client/restaurants";

    export let open: string;
    export let close: string;

    export let currentFrTime = getFranceTime().substring(0, 2) + ":00:00:01";
</script>

<div class="time-range">
    {#each Array(24) as _, i}
        {@const current = `${String(i).padStart(2, "0")}:00:00:01`}
        <div
            title={Number(current.substring(0, 2)) + "H"}
            class:open={isRestaurantOpen(
                { open_hour: open, close_hour: close },
                current
            )}
            class:active={currentFrTime === current}
        />
    {/each}
</div>

<style>
    .time-range {
        display: flex;
        gap: 1px;
    }

    .time-range div {
        position: relative;
        --open-color: #c00;
        content: "";
        aspect-ratio: 1;
        width: 20px;
        background-color: var(--open-color);
    }

    .time-range div.open {
        --open-color: #0c0;
    }

    .time-range div.active {
        background: repeating-linear-gradient(
                -45deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2) 5px,
                rgba(0, 0, 0, 0.3) 5px,
                rgba(0, 0, 0, 0.3) 10px
            ),
            var(--open-color);
    }
</style>
