import { atom } from 'nanostores';

export const index = atom(0);

export function setIndex(activeIndex) {
    index.set(activeIndex);
}

export function incrementIndex() {
    //index.set(index++);
    index.set(index.get() + 1);
}

export function decrementIndex() {
    //index.set(index--);
    index.set(index.get() - 1);
}