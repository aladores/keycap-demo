import { atom } from 'nanostores';

export const themeMode = atom('light');
export const themeDynamic = atom(false);

export function toggleMode() {
    const theme = themeMode.get();
    const newTheme = theme === 'light' ? 'dark' : 'light';

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', newTheme);
    }

    if (theme === "light") {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.remove('dark');
    }

    themeMode.set(newTheme);
}

export function toggleDynamic() {
    const dynamic = themeDynamic.get();
    const newDynamic = !dynamic;

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('dynamic', newDynamic);
    }

    themeDynamic.set(newDynamic);
}
