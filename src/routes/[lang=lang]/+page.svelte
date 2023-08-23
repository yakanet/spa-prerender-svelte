<script>
    import {LL, locale} from '$i18n/i18n-svelte';
    
    export let data;
    let selectedLanguage = data.language;

    function setLanguage() {
        console.log(selectedLanguage)
        window.location.href = '/' + selectedLanguage;
    }
</script>

<svelte:head>
    <title>Welcome to Sveltekit</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>
    {$LL.HI({name: 'John'})}
</p>

{JSON.stringify($locale)}

<ul>
    {#each data.pages as page}
        <li>
            <a href="pages/{page}">Page {page}</a>
        </li>
    {/each}
</ul>

<select  bind:value={selectedLanguage} on:change={() => setLanguage()}>
    {#each data.languages as language}
        <option value={language} selected={language === selectedLanguage}>{language}</option>
    {/each}
</select>

<style>
    h1 {
        color: red;
    }
</style>
