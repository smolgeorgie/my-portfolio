// place files you want to import through the `$lib` alias in this folder.

export { default as IconLib } from './utils/IconLib.svelte';

export { default as Banner } from './components/Banner.svelte';
export { default as Intro } from './blocks/Intro.svelte';
export { default as MyWork } from './blocks/MyWork.svelte';
export { default as SideNav } from './blocks/SideNav.svelte';
export { default as Music } from './molecules/Music.svelte'; // Fixed case
export { viewMode, currentLanguage, translations } from './stores.js';
