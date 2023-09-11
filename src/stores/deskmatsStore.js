import { atom } from 'nanostores';

export const deskmatsIndex = atom(0);

export function setDeskmatsIndex(activeIndex) {
    deskmatsIndex.set(activeIndex);
}

export function incrementDeskmatsIndex() {
    deskmatsIndex.set(index.get() + 1);
}

export function decrementDeskmatsIndex() {
    deskmatsIndex.set(index.get() - 1);
}