import { loadAllLocales } from "$i18n/i18n-util.sync";
import { baseLocale, i18n, locales } from "$i18n/i18n-util";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import type { Locales } from "$i18n/i18n-types";

loadAllLocales()
const L = i18n();

export const handleLocale: Handle = ({event, resolve}) => {
    const locale = getLocaleFromPathParam(event.url.pathname);
    const LL = L[locale];

    event.locals.locale = locale;
	event.locals.LL = LL;

	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) })
}

export const handle = sequence(handleLocale)

function getLocaleFromPathParam(pathname: string): Locales {
    const pathLocale = pathname.split('/')[1]; // pattern "/en/xxx" or "/"
    for(const locale of locales) {
        if(pathLocale === locale) {
            return locale;
        }
    };
    return baseLocale;
}
