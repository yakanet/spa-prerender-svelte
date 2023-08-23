<script>
    import { setLocale } from "$i18n/i18n-svelte";

    export let data;
    setLocale(data.locale);
</script>

<slot />
