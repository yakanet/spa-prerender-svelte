<script lang="ts">
    import LL from "$i18n/i18n-svelte";
    import { fly } from "svelte/transition";
    import { useRegisterSW } from "virtual:pwa-register/svelte";
    const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
        onRegistered(r) {
            // uncomment following code if you want check for updates
            // r && setInterval(() => {
            //    console.log('Checking for sw update')
            //    r.update()
            // }, 20000 /* 20s for testing purposes */)
            console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error: any) {
            console.log("SW registration error", error);
        },
    });
    const close = () => {
        offlineReady.set(false);
        needRefresh.set(false);
    };
    $: toast = $needRefresh;
</script>

{#if toast}
    <div class="pwa-toast" role="alert" transition:fly={{duration:1000, y: 200}}>
        <div class="message">
            <span>
                {$LL.pwa_new_content()}
            </span>
        </div>
        {#if $needRefresh}
            <button on:click={() => updateServiceWorker(true)}>
                {$LL.pwa_reload()}
            </button>
        {/if}
        <button on:click={close}>
            {$LL.pwa_close()}
        </button>
    </div>
{/if}

<style>
    .pwa-toast {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0.5rem;
        padding: 12px;
        border: 1px solid #8885;
        border-radius: 4px;
        z-index: 2;
        text-align: left;
        box-shadow: 3px 4px 5px 0 #8885;
        background-color: white;
    }
    .pwa-toast .message {
        margin-bottom: 8px;
    }
    .pwa-toast button {
        border: 1px solid #8885;
        outline: none;
        margin-right: 5px;
        border-radius: 2px;
        padding: 3px 10px;
    }
</style>
