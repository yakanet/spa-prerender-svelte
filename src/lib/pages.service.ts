import { locales } from "$i18n/i18n-util";

const PAGES = [
    1, 23, 20, 10
];

export async function getPagesId() {
    return Promise.resolve(PAGES);
}

export function getLanguages() {
    return locales;
}

type MapCartesian<T extends any[][]> = {
    [P in keyof T]: T[P] extends Array<infer U> ? U : never
}
export function cartesian<T extends any[][]>(...arr: T): MapCartesian<T>[] {
    return arr.reduce(
        (a, b) => a.flatMap(c => b.map(d => [...c, d])),
        [[]]
    ) as MapCartesian<T>[];
}