import { atom } from 'nanostores';

export const index = atom(0);

export function setIndex(activeIndex) {
    index.set(activeIndex);
}