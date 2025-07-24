import { writable } from 'svelte/store';

export const viewMode = writable('mobile');
export const currentLanguage = writable('nl');

export const translations = {
    nl: {
        // Header
        name: 'Ilona',
        status: 'Online',
        changeTheme: 'Verander thema',
        changeLanguage: 'English',
        
        // Navigation
        home: 'Home',
        profile: 'Mijn profiel',
        work: 'Mijn werk',
        photo: 'Foto\'s',
        blogs: 'Blogs',
        
        // Intro section
        facts: 'Feit',
        name_label: 'Naam:',
        age: 'Leeftijd:',
        location: 'Woonplaats:',
        company: 'Bedrijf:',
        position: 'Functie:',
        education: 'MBO / HBO / Universiteit:',
        schools: 'Scholen',
        passions: 'Passies:',
        
        // Content
        amsterdam_rotterdam: 'Amsterdam & Rotterdam',
        paer_studio: 'Paer Studio',
        frontend_developer: 'Frontend Developer',
        education_full: 'HBO Frontend Design and Development & MBO Marketing, Journalistiek en Communicatie',
        schools_full: 'Hogeschool van Amsterdam & MBO College Utrecht',
        passions_list: 'Programmeren, Designen, Fotografie',

        // MyWork section
        mywork: 'Mijn werk'
    },
    en: {
        // Header
        name: 'Ilona',
        status: 'Online',
        changeTheme: 'Change theme',
        changeLanguage: 'Nederlands',
        
        // Navigation
        home: 'Home',
        profile: 'My profile',
        work: 'My work',
        photo: 'Photos',
        blogs: 'Blogs',
        
        // Intro section
        facts: 'Facts',
        name_label: 'Name:',
        age: 'Age:',
        location: 'Location:',
        company: 'Company:',
        position: 'Position:',
        education: 'Education:',
        schools: 'Schools:',
        passions: 'Passions:',
        
        // Content
        amsterdam_rotterdam: 'Amsterdam & Rotterdam',
        paer_studio: 'Paer Studio',
        frontend_developer: 'Frontend Developer',
        education_full: 'Frontend Design and Development & Marketing, Journalism and Communication',
        schools_full: 'Amsterdam University of Applied Sciences & Utrecht College',
        passions_list: 'Programming, Design, Photography',

        // MyWork section
        mywork: 'My work'

    }
};
