import { atom } from 'nanostores';

export const kitsIndex = atom(0);

export function setKitsIndex(activeIndex) {
    kitsIndex.set(activeIndex);
}

export function incrementIndex() {
    kitsIndex.set(index.get() + 1);
}

export function decrementIndex() {
    kitsIndex.set(index.get() - 1);
}