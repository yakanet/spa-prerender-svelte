import { DIRECTUS_HOST } from "$env/static/private";
import type { Produits, Restaurants } from "./client.types";
import type { Locales } from "$i18n/i18n-types";

const localeMapping: Record<Locales, number> = {
    'fr': 2,
    'en': 1
}

export class Directus {
    constructor(private _fetch: typeof fetch) {

    }
    getRestaurants(): Promise<Restaurants[]> {
        const url = new URL('/items/restaurants', DIRECTUS_HOST);
        url.searchParams.set('fields', ['id', 'name', 'code_affluence', 'open_hour', 'close_hour', 'isFree'].join());
        //url.searchParams.set('deep[translations][_filter][languages_code][_eq]', 'FR')
        console.log(url.toString())
        return fetch(url)
            .then(response => response.json())
            .then(response => response.data);

    }

    getRestaurant(id: string): Promise<Restaurants> {
        const url = new URL('/items/restaurants/' + id, DIRECTUS_HOST);
        url.searchParams.set('fields', ['*', '*.*'].join());
        return fetch(url)
            .then(response => response.json())
            .then(response => response.data);
    }

    getProducts(locale: Locales): Promise<Produits[]> {
        const url = new URL('/items/produits', DIRECTUS_HOST);
        url.searchParams.set('fields', ['id', 'i18n_name.*'].join());
        url.searchParams.set('deep[i18n_name][_filter][languages_id][_eq]', String(localeMapping[locale]))
        console.log(url.toString())
        return fetch(url)
            .then(response => response.json())
            .then(response => response.data)
            .then(products => products.map((product: Produits) => {
                product.name = product?.i18n_name?.[0].name ?? '';
                delete product.i18n_name;
                return product;
            }));
    }
}
