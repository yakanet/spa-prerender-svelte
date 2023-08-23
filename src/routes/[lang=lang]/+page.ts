import { getLanguages, getPagesId } from '$lib/pages.service.js';

export const load = async ({parent}) => {
    const {locale} = await parent();
    return {
        language: locale,
        languages: getLanguages(),
        pages: getPagesId(),
    };
};

export async function entries() {
    const pages = getLanguages();
    return Promise.resolve(pages.map(page => ({
        lang: String(page)
    })));
  }
