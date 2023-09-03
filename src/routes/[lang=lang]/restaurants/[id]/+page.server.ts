import { Directus } from '$lib/client.server.js';
import { cartesian, getLanguages } from '$lib/pages.service.js';
import type { PageServerLoad } from './$types.js';
//export const csr = false;

export const load: PageServerLoad = async ({ params, fetch }) => {
    const directus = new Directus(fetch)

    return {
        restaurant: directus.getRestaurant(params.id)
    }
};

export async function entries() {
    const directus = new Directus(fetch)
    const restaurants = await directus.getRestaurants();
    const languages = getLanguages();
    return Promise.resolve(cartesian(restaurants.map(r => r.id), languages).map(([restaurantId, language]) => ({
        id: String(restaurantId),
        lang: language,
    })));
}