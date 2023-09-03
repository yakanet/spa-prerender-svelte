<script lang="ts">
  import { setLocale } from "$i18n/i18n-svelte";
  import { pwaInfo } from "virtual:pwa-info";

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";

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
