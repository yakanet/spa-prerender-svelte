import { loadLocaleAsync } from "$i18n/i18n-util.async";

export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({data}) => {
    await loadLocaleAsync(data.locale);
    return { locale: data.locale }
};