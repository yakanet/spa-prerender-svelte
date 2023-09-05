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
  <!-- PWA Manifest-->
  {@html webManifest}
  <!-- End PWA Manifest-->

  <!-- Matomo Tag Manager -->
  <script>
    const _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    (function () {
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src =
        "https://cdn.matomo.cloud/prerenderbroutindev.matomo.cloud/container_IUHbbhB5.js";
      s.parentNode.insertBefore(g, s);
    })();
  </script>
  <!-- End Matomo Tag Manager -->
</svelte:head>

<main>
  <slot />
</main>

{#await import("$lib/ReloadPrompt.svelte") then { default: ReloadPrompt }}
  <ReloadPrompt />
{/await}
