import { baseLocale } from "$i18n/i18n-util";
import { redirect } from "@sveltejs/kit";

export const load = async () => {
    throw redirect(302, '/' + baseLocale)
};