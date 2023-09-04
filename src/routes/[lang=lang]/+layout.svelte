<script lang="ts">
  import { setLocale } from "$i18n/i18n-svelte";
  import { pwaInfo } from "virtual:pwa-info";
  import { onNavigate } from "$app/navigation";

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  export let data;
  setLocale(data.locale);
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<main>
  <slot />
</main>

{#await import("$lib/ReloadPrompt.svelte") then { default: ReloadPrompt }}
  <ReloadPrompt />
{/await}
