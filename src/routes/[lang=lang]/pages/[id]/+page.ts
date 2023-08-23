import { cartesian, getLanguages, getPagesId } from '$lib/pages.service.js';

export const ssr = true;
export const csr = false;

export const load = async ({parent, params}) => {
    const { locale } = await parent()

    return {
        id: params.id,
        locale
    };
};

export async function entries() {
    const pages = await getPagesId();
    const languages = getLanguages();
    return Promise.resolve(cartesian(pages, languages).map(([page, language]) => ({
        id: String(page),
        lang: language,
    })));
  }