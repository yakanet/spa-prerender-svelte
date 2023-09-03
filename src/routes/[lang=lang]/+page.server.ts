import { Directus } from '$lib/client.server.js';
import { getLanguages } from '$lib/pages.service.js';

export const load = async ({ fetch, parent }) => {
    const directus = new Directus(fetch);
    const { locale } = await parent();

    return {
        language: locale,
        languages: getLanguages(),
        restaurants: directus.getRestaurants(),
        products: directus.getProducts(locale)
    }
};


export async function entries() {
    const pages = getLanguages();
    return Promise.resolve(pages.map(page => ({
        lang: String(page)
    })));
}
