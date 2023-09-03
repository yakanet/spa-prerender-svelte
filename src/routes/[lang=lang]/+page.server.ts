import { Directus } from '$lib/client.server.js';
import { getLanguages } from '$lib/pages.service.js';
import type { PageLoad } from '../$types.js';

export const load: PageLoad = async ({ fetch, parent }) => {
    const directus = new Directus(fetch);
    const { locale } = await parent();

    return {
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
